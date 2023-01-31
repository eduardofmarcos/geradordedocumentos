import {logger} from '../../../../util/Logger/Logger';
import {CpfCreator} from "../util/CpfCreator";

class CpfService {
    
    /**
     * Create CPF
     */
    async create(isPointed: boolean, qtd: string): Promise<string | any> {
        
        logger.watch('Creating new CPF')
        
        try {
            let cpfsArrayPointed = []
            let cpfsArray = []
            let index = Number(qtd) > 10000 ? 10000 : qtd
            
            for (let i: number = 0; i < index; i++) {
                let cpf = await CpfCreator.cpfGenerator()
                
                if (!isPointed) {
                    cpfsArray.push(cpf.replace(/\D/g, ''))
                }
                
                cpfsArrayPointed.push(cpf)
            }
            
            return isPointed ? cpfsArrayPointed : cpfsArray
        } catch (e) {
            console.log(e)
        }
        
    }
}

export default new CpfService()