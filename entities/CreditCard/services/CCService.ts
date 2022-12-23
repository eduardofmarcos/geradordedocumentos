import {logger} from '../../../util/Logger/Logger';
import {CCCreator} from "../util/CCCreator";
import {ICreditCard} from "../types/interfaces/interfaces";

class CCService {
    
    /**
     * Create CC
     */
    async create(flag:string): Promise<ICreditCard | any> {
        
        logger.watch('Creating new CC')
        
        try {
            let CC: ICreditCard = await CCCreator.CCGenerator(flag)
            
            return CC
        } catch (e) {
            console.log(e)
        }
    }
    
}

export default new CCService()