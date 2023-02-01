import {logger} from '../../../util/Logger/Logger';
import {MaspCreator} from "../util/MaspCreator";
import {CnhCreator} from "../../Cnh/util/CnhCreator";

class MaspService {
    
    /**
     * Create Masp
     */
    async create(isPointed: boolean, qtd: string): Promise<string | any> {
        
        logger.watch('Creating new Masp')
        
        try {
            let MaspsArrayPointed = []
            let MaspsArray = []
            let index = Number(qtd) > 10000 ? 10000 : qtd
            
            for (let i: number = 0; i < index; i++) {
                let Masp = await MaspCreator.MaspGenerator()
                
                if (!isPointed) {
                    MaspsArray.push(Masp.replace(/\D/g, ''))
                }
                
                MaspsArrayPointed.push(Masp)
            }
            
            return isPointed ? MaspsArrayPointed : MaspsArray
        } catch (e) {
            console.log(e)
        }
        
    }
    
    async validate(valueToCheck:string): Promise<string | any>{
        
        try{
            const resultOfValidation = await MaspCreator.MaspValidator(valueToCheck)
            return resultOfValidation
        }catch (e){
            console.log(e)
        }
        
        
    }
}

export default new MaspService()