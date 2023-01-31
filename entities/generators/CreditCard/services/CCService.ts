import {logger} from '../../../../util/Logger/Logger';
import {CCCreator} from "../util/CCCreator";
import {ICreditCard} from "../types/interfaces/interfaces";

class CCService {
    
    /**
     * Create CC
     */
    async create(flag: string, qtd: string): Promise<ICreditCard | any> {
        
        logger.watch('Creating new CC')
        
        try {
            
            let ccsArray: ICreditCard | any = []
            let index = Number(qtd) > 1000 ? 1000 : qtd
            
            for (let i: number = 0; i < index; i++) {
                let CC: ICreditCard = await CCCreator.CCGenerator(flag)
                
                ccsArray.push(CC)
            }
            
            return ccsArray
            
        } catch (e) {
            console.log(e)
        }
    }
    
}

export default new CCService()