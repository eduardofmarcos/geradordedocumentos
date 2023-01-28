import {logger} from '../../../../util/Logger/Logger';
import {TeCreator} from "../util/TeCreator";

class TeService {
    
    /**
     * Create Te
     */
    async create(isPointed: boolean, qtd: string, state: string): Promise<string | any> {
        
        logger.watch('Creating new Te')
        
        try {
            
            let TeArrayPointed = []
            let TeArray = []
            let index = Number(qtd) > 30 ? 30 : qtd
            
            for (let i: number = 0; i < index; i++) {
                
                let Te = await TeCreator.TeGenerator(state)
                
                if (!isPointed) {
                    TeArray.push(Te.replace(/\D/g, ''))
                }
                
                TeArrayPointed.push(Te)
            }
            return isPointed ? TeArrayPointed : TeArray
        } catch (e) {
            console.log(e)
        }
        
    }
}

export default new TeService()