import {logger} from '../../../../util/Logger/Logger';
import {RgSPCreator} from "../util/RgSPCreator";

class RgSPService {
    
    /**
     * Create RgSP
     */
    async create(isPointed: boolean, qtd: string): Promise<string | any> {
        
        logger.watch('Creating new RgSP')
        
        try {
            let RgSPsArrayPointed = []
            let RgSPsArray = []
            let index = Number(qtd) > 30 ? 30 : qtd
            
            for (let i: number = 0; i < index; i++) {
                let RgSP = await RgSPCreator.RgSPGenerator()
                
                if (!isPointed) {
                    RgSPsArray.push(RgSP.replace(/\D/g, ''))
                }
                
                RgSPsArrayPointed.push(RgSP)
            }
            
            return isPointed ? RgSPsArrayPointed : RgSPsArray
        } catch (e) {
            console.log(e)
        }
        
    }
}

export default new RgSPService()