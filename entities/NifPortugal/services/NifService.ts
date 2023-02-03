import {logger} from '../../../util/Logger/Logger';
import {NifCreator} from "../util/NifCreator";
import {MaspCreator} from "../../MaSP/util/MaspCreator";

class NifService {
    
    /**
     * Create Nif
     */
    async create(isPointed: boolean, qtd: string): Promise<string | any> {
        
        logger.watch('Creating new Nif')
        
        try {
            
            let nifsArrayPointed = []
            let nifsArray = []
            let index = Number(qtd) > 10000 ? 10000 : qtd
            
            for (let i: number = 0; i < index; i++) {
                
                let nif = await NifCreator.NifGenerator()
                
                if (!isPointed) {
                    nifsArray.push(nif.replace(/\D/g, ''))
                }
                
                nifsArrayPointed.push(nif)
            }
            
            return isPointed ? nifsArrayPointed : nifsArray
        } catch (e) {
            console.log(e)
        }
        
    }
    
    async validate(valueToCheck: string): Promise<string | any> {
        
        try {
            const resultOfValidation = await NifCreator.NifValidator(valueToCheck)
            return resultOfValidation
        } catch (e) {
            console.log(e)
        }
        
        
    }
}

export default new NifService()