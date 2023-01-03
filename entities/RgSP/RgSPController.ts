import {Response} from 'express';
import {OK} from 'http-status';
import {logger} from '../../util/Logger/Logger';
import RgSPService from "./services/RgSPService";

interface IRgSPController {
    create(req: any, res: Response): Promise<Response>
}

class RgSPController implements IRgSPController {
    
    /**
     * create a RgSP
     */
    async create(req: any, res: Response): Promise<Response> {
        
        logger.start('Creating RgSP - SSP/SP')
        
        const isPointed: boolean = req.query.pointed
        const qtd: string = req.query.qtd ? req.query.qtd : "1"
        
        const created: string = await RgSPService.create(isPointed, qtd)
        
        logger.success('RgSP Created')
        
        return res.status(OK).json(created)
        
    }
    
}

export default new RgSPController()