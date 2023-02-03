import {logger} from '../../../util/Logger/Logger';
import {PisCreator} from "../util/PisCreator";
import {NifCreator} from "../../NifPortugal/util/NifCreator";

class PisService {
    
    /**
     * Create Pis
     */
    async create(isPointed: boolean, qtd: string): Promise<string | any> {
        
        logger.watch('Creating new Pis')
        
        try {
            
            let PisArrayPointed = []
            let PisArray = []
            let index = Number(qtd) > 10000 ? 10000 : qtd
            
            
            for (let i: number = 0; i < index; i++) {
                let Pis = await PisCreator.PisGenerator()
                
                if (!isPointed) {
                    PisArray.push(Pis.replace(/\D/g, ''))
                }
                
                PisArrayPointed.push(Pis)
            }
            return isPointed ? PisArrayPointed : PisArray
        } catch (e) {
            console.log(e)
        }
        
    }
    
    async validate(valueToCheck: string): Promise<string | any> {
        
        try {
            const resultOfValidation = await PisCreator.PisValidator(valueToCheck)
            return resultOfValidation
        } catch (e) {
            console.log(e)
        }
        
        
    }
}

export default new PisService()