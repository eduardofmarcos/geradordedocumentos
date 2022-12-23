import {logger} from '../../../util/Logger/Logger';
import {CnpjCreator} from "../util/CnpjCreator";

class CnpjService {
    
    /**
     * Create CPF
     */
    async create(isPointed: boolean): Promise<string | any> {
        
        logger.watch('Creating new CNPJ')
        
        try {
            let cnpj = await CnpjCreator.CnpjGenerator()
            
            if (!isPointed) {
                return cnpj.replace(/\D/g, '')
            }
            
            return cnpj
        } catch (e) {
            console.log(e)
        }
        
    }
}

export default new CnpjService()