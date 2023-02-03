import {logger} from '../../../util/Logger/Logger';
import {RgRJCreator} from "../util/RgRJCreator";
import {PisCreator} from "../../Pis/util/PisCreator";

class RgRJService {
    
    /**
     * Create RgRJ
     */
    async create(isPointed: boolean, qtd: string): Promise<string | any> {
        
        logger.watch('Creating new RgRJ')
        
        try {
            let RgRJsArrayPointed = []
            let RgRJsArray = []
            let index = Number(qtd) > 10000 ? 10000 : qtd
            
            for (let i: number = 0; i < index; i++) {
                let RgRJ = await RgRJCreator.RgRJGenerator()
                
                if (!isPointed) {
                    RgRJsArray.push(RgRJ.replace(/\D/g, ''))
                }
                
                RgRJsArrayPointed.push(RgRJ)
            }
            
            return isPointed ? RgRJsArrayPointed : RgRJsArray
        } catch (e) {
            console.log(e)
        }
        
    }
    
    async validate(valueToCheck: string): Promise<string | any> {
        
        try {
            const resultOfValidation = await RgRJCreator.RgRJValidator(valueToCheck)
            return resultOfValidation
        } catch (e) {
            console.log(e)
        }
        
        
    }
}

export default new RgRJService()