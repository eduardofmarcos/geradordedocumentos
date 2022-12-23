import jwt from 'jsonwebtoken';
import {Types} from 'mongoose';
import TokenMongo from '../../entities/Token/model/index';
import {eTokenType, IToken} from '../../entities/Token/model/Schema';
import {TokenHandler} from "./TokenHandler";
import {TokenStrategies} from "./TokenStrategies";

export interface IUseTokenHandler {
    
    payload: string | Object,
    strategy?: string,
    requester?: Types.ObjectId | string
    options?: jwt.SignOptions,
    type?: eTokenType
    
}

export interface IUseTokenStrategy {
    
    strategy: string,
    token: string,
    requester?: Types.ObjectId | string,
    type?: eTokenType
    
}

/**
 * Classe que estende/implementa a classe de gerar token.
 */
class Token extends TokenHandler {
    
    protected defaultSignOptions: jwt.SignOptions = {expiresIn: "2h"}
    protected defaultStrategy = 'mongoStrategy'
    
    /**
     * Gera um novo token.
     * @param {IUseTokenHandler} generatorPayload - Objeto com os dados do token
     */
    protected async useGenerator(generatorPayload: IUseTokenHandler): Promise<string> {
        
        this.logger.watch('Sign payload: ' + JSON.stringify(generatorPayload.payload));
        
        const options = generatorPayload.options ? generatorPayload.options : this.defaultSignOptions;
        
        const strategy = generatorPayload.strategy ? generatorPayload.strategy : this.defaultStrategy;
        
        const token = jwt.sign(generatorPayload.payload, process.env.SECRET_TOKEN as string, options);
        
        await this.useStrategy({strategy, token, requester: generatorPayload.requester, type: generatorPayload.type})
        
        return token
        
    }
    
    /**
     * Retorna o dado original.
     * @param {object} token - Token a ser decodificado
     */
    protected useDecoder(token: string): string | object {
        
        this.logger.watch('Token to decode: ' + token)
        
        return jwt.verify(token, process.env.SECRET_TOKEN as string)
        
    }
    
    /**
     * Define estratégia para lidar com o token.
     * @param {IUseTokenStrategy} strategyPayload - Objeto de opções
     */
    protected async useStrategy(strategyPayload: IUseTokenStrategy): Promise<any> {
        
        if (strategyPayload.strategy === 'mongoStrategy') return await TokenStrategies.mongoStrategy({
            requesterId: strategyPayload.requester as string,
            token: strategyPayload.token,
            type: strategyPayload.type
        });
        
        
    }
    
    /**
     * Busca e deleta o token do banco.
     * @param {string} token - token
     * @param {string} searchParam - parametro de procura
     * @param {any} searchValue - valor de procura
     */
    protected async useMongoDelete(token: string, searchParam?: string, searchValue?: any): Promise<IToken | any> {
        
        if (!searchParam) return await TokenMongo.findOneAndDelete({token});
        
        return await TokenMongo.findOneAndDelete({[searchParam]: searchValue});
        
    }
    
    protected async useMongoCheck(token: string): Promise<IToken | any> {
        
        return await TokenMongo.findOne({token})
        
    }
    
}

export default new Token()
