import {logger} from '../../../../util/Logger/Logger';
import {CertidaoCreator} from "../util/CertidaoCreator";

class CertidaoService {
    
    /**
     * Create Certidao
     */
    async create(isPointed: boolean, qtd: string): Promise<string | any> {
        
        logger.watch('Creating new Certidao')
        
        try {
            
            let certidaoArrayPointed = []
            let certidaoArray = []
            let index = Number(qtd) > 30 ? 30 : qtd
            
            
            for (let i: number = 0; i < index; i++) {
                let certidao = await CertidaoCreator.CertidaoGenerator()
                
                if (!isPointed) {
                    certidaoArray.push(certidao.replace(/\D/g, ''))
                }
                
                certidaoArrayPointed.push(certidao)
            }
            return isPointed ? certidaoArrayPointed : certidaoArray
        } catch (e) {
            console.log(e)
        }
        
    }
}

export default new CertidaoService()