import {logger} from '../../../util/Logger/Logger';
import {CpfCreator} from "../util/CpfCreator";

class CpfService {
    
    /**
     * Create CPF
     */
    async create(isPointed: boolean): Promise<string | any> {
        
        logger.watch('Creating new CPF')
        
        try {
            let cpf = await CpfCreator.cpfGenerator()
            
            if (!isPointed) {
                return cpf.replace(/\D/g, '')
            }
            
            return cpf
        } catch (e) {
            console.log(e)
        }
        
    }
}

export default new CpfService()