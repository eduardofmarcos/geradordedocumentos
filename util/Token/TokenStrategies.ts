import {Types} from 'mongoose';
import TokenMongo from '../../entities/Token/model/index';
import {eTokenType, IToken} from '../../entities/Token/model/Schema';
import {logger} from '../Logger/Logger';

export interface ITokenMongoStrategy {
    
    requesterId: Types.ObjectId | string,
    token: string,
    type?: eTokenType
    
}

export class TokenStrategies {
    
    /**
     * Salva token no banco.
     * @param {ITokenMongoStrategy} mongoPayload - Objeto de dados apra ser salvo
     */
    static async mongoStrategy(mongoPayload: ITokenMongoStrategy): Promise<IToken> {
        
        logger.watch(`Saving on Mongo for id: ${mongoPayload.requesterId} - Token: ${mongoPayload.token}`)
        
        const toSave: any = {requester: mongoPayload.requesterId, token: mongoPayload.token}
        
        if (mongoPayload.type) toSave.type = mongoPayload.type
        
        return await new TokenMongo(toSave).save()
        
    }
    
}