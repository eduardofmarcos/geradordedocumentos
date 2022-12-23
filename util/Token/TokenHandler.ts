import {IToken} from "../../entities/Token/model/Schema";
import {TokenInvalid} from "../APIError";
import {I18N} from "../I18N";
import {logger} from "../Logger/Logger";
import {IUseTokenHandler, IUseTokenStrategy} from "./Token";

interface ITokenHandler {
    
    generateToken(payload: IGenerateToken): Promise<string>
    
    decryptToken(token: string): any
    
    destroyToken(token: string, searchParam?: string, searchValue?: any): Promise<any>
    
    checkValid(token: string): Promise<IToken>
    
}

interface IGenerateToken extends IUseTokenHandler {
    
    options?: any
    
}

/**
 * Classe abstrata de gerador de tokens.
 */
export abstract class TokenHandler implements ITokenHandler {
    
    protected logger = logger;
    
    /**
     * Retorna um novo token.
     * @param {IGenerateToken} payloadData - Opções para serem tokenizadas
     */
    async generateToken(payloadData: IGenerateToken): Promise<string> {
        
        this.logger.watch('Generating Token')
        
        try {
            
            return await this.useGenerator({...payloadData})
            
        } catch (error) {
            
            this.logger.fatal(error as string)
            
            throw new TokenInvalid(I18N.ERROR_MESSAGES.TOKEN.CREATE);
            
        }
    }
    
    /**
     * Retorna o valor decodificado.
     * @param {string} token - Token a ser decodificado
     */
    decryptToken(token: string): any {
        
        this.logger.watch('Decoding Token')
        
        return this.useDecoder(token)
        
    }
    
    /**
     * Deleta token no banco.
     * @param {string} token - Token a ser decodificado
     * @param {string} searchParam? - parâmetro opcional de procura
     * @param {any} searchValue? - parâmetro opcional de procura
     */
    async destroyToken(token: string, searchParam?: string, searchValue?: any): Promise<any> {
        
        this.logger.watch('Destroying token')
        
        return await this.useMongoDelete(token, searchParam, searchValue)
        
    }
    
    /**
     * Checa token no banco.
     * @param {string} token - Token a ser checado
     */
    async checkValid(token: string): Promise<IToken> {
        
        this.logger.watch('Check token: ' + token)
        
        return await this.useMongoCheck(token)
        
    }
    
    protected abstract useGenerator(generatorPayload: IUseTokenHandler): Promise<string>
    
    protected abstract useDecoder(token: string): unknown
    
    protected abstract useStrategy(strategyPayload: IUseTokenStrategy): any
    
    protected abstract useMongoDelete(token: string, searchParam?: string, searchValue?: any): Promise<IToken>
    
    protected abstract useMongoCheck(token: string): Promise<IToken>
    
}