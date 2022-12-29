import {logger} from '../../../util/Logger/Logger';
import {CertidaoCreator} from "../util/CertidaoCreator";

class CertidaoService {
    
    /**
     * Create Certidao
     */
    async create(isPointed: boolean): Promise<string | any> {
        
        logger.watch('Creating new Certidao')
        
        try {
            let Certidao = await CertidaoCreator.CertidaoGenerator()
            
            if (!isPointed) {
                return Certidao.replace(/\D/g, '')
            }
            
            return Certidao
        } catch (e) {
            console.log(e)
        }
        
    }
}

export default new CertidaoService()