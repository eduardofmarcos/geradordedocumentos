import {logger} from '../../../util/Logger/Logger';
import {RegistroEncomendaCreator} from "../util/RegistroEncomendaCreator";

class RegistroEncomendaService {
    
    /**
     * Create RegistroEncomenda
     */
    async create(isPointed: boolean, qtd: string): Promise<string | any> {
        
        logger.watch('Creating new RegistroEncomenda')
        
        try {
            
            let RegistroEncomendaArrayPointed = []
            let RegistroEncomendaArray = []
            let index = Number(qtd) > 10000 ? 10000 : qtd
            
            
            for (let i: number = 0; i < index; i++) {
                let RegistroEncomenda = await RegistroEncomendaCreator.RegistroEncomendaGenerator()
                
                if (!isPointed) {
                    RegistroEncomendaArray.push(RegistroEncomenda.replace(/\s/g, ''))
                }
                
                RegistroEncomendaArrayPointed.push(RegistroEncomenda)
            }
            return isPointed ? RegistroEncomendaArrayPointed : RegistroEncomendaArray
        } catch (e) {
            console.log(e)
        }
        
    }
}

export default new RegistroEncomendaService()