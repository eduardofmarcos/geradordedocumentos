import {Response} from 'express';
import {OK} from 'http-status';
import {logger} from '../../util/Logger/Logger';
import CCService from "./services/CCService";
import {ICreditCard} from "./types/interfaces/interfaces";

interface ICCController {
    create(req: any, res: Response): Promise<Response>
}

class CCController implements ICCController {
    
    /**
     * create a CC
     */
    async create(req: any, res: Response): Promise<Response> {
        
        logger.start('Creating CC')
        
        const flag: string = req.query.flag
        const qtd: string = req.query.qtd ? req.query.qtd : "1"
        
        const created: ICreditCard = await CCService.create(flag, qtd)
        
        logger.success('CC Created')
        
        return res.status(OK).json(created)
        
    }
    
}

export default new CCController()