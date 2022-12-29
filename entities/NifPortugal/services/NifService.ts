import {logger} from '../../../util/Logger/Logger';
import {NifCreator} from "../util/NifCreator";

class NifService {
    
    /**
     * Create Nif
     */
    async create(isPointed: boolean): Promise<string | any> {
        
        logger.watch('Creating new Nif')
        
        try {
            let Nif = await NifCreator.NifGenerator()
            
            if (!isPointed) {
                return Nif.replace(/\D/g, '')
            }
            
            return Nif
        } catch (e) {
            console.log(e)
        }
        
    }
}

export default new NifService()