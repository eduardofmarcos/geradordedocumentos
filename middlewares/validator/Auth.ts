import {UNAUTHORIZED} from 'http-status';
import User from '../../entities/User/model';
import {IycProfile} from '../../entities/Base/services.interfaces';
import {eTokenRoles, eTokenType} from '../../entities/Token/model/Schema';
import Token from '../../util/Token/Token';
import {TokenInvalid} from "../../util/APIError";
import {I18N} from "../../util/I18N";
import UserService from "../../entities/User/services/UserService";

export default class Auth {
    
    /**
     * Verificação de token
     */
    static async authToken(req: any, res: any, next: any): Promise<any> {
        
        const token = req.headers.token
        
        if (token === process.env.YOUCATHOLIC_ACCESS_TOKEN) {
            
            const user: any = await User.findOne({_id: req.body.id})
            
            req.ycProfile = {id: user._id, token, role: eTokenRoles.ADMIN, type: eTokenType.API}
            
            return next()
            
        }
        
        const auth: any = await Token.checkValid(token)
        
        if (!auth) return res.sendStatus(UNAUTHORIZED)
        
        const {id, role, type} = Token.decryptToken(token)
        
        const user: any = await UserService.readById(id)
        
        if (!user) return res.sendStatus(UNAUTHORIZED)
        
        req.ycProfile = {id, token, role, type}
        
        if (auth.type === eTokenType.APP) {
            
            const user: any = await User.findById(auth.requester).lean().exec()
            
            const profile: IycProfile = {id, token, role, user}
            
            req.ycProfile = profile
            
        }
        
        return next()
        
    }
    
    /**
     * Verificação de admin
     */
    static isAdmin(req: any, res: any, next: any) {
        
        if (req.ycProfile.role !== eTokenRoles.ADMIN) throw new TokenInvalid(I18N.ERROR_MESSAGES.TOKEN.UNAUTHORIZED);
        
        return next()
        
    }
}