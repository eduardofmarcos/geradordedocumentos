import {logger} from '../../../../util/Logger/Logger';
import {CnhCreator} from "../util/CnhCreator";

class CnhService {
    
    /**
     * Create Cnh
     */
    async create(isPointed: boolean, qtd: string): Promise<string | any> {
        
        logger.watch('Creating new Cnh')
        
        try {
            
            let CnhArrayPointed = []
            let CnhArray = []
            let index = Number(qtd) > 30 ? 30 : qtd
            
            
            for (let i: number = 0; i < index; i++) {
                let Cnh = await CnhCreator.CnhGenerator()
                
                if (!isPointed) {
                    CnhArray.push(Cnh.replace(/\D/g, ''))
                }
                
                CnhArrayPointed.push(Cnh)
            }
            return isPointed ? CnhArrayPointed : CnhArray
        } catch (e) {
            console.log(e)
        }
        
    }
}

export default new CnhService()