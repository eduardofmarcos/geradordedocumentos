import {Response} from 'express';
import {OK} from 'http-status';
import {logger} from '../../util/Logger/Logger';
import NifService from "./services/NifService";

interface INifController {
    create(req: any, res: Response): Promise<Response>
}

class NifController implements INifController {
    
    /**
     * create a Nif
     */
    async create(req: any, res: Response): Promise<Response> {
        
        logger.start('Creating Nif')
        
        const isPointed: boolean = req.query.pointed
        const qtd: string = req.query.qtd ? req.query.qtd : "1"
        
        const created: string = await NifService.create(isPointed, qtd)
        
        logger.success('Nif Created')
        
        return res.status(OK).json(created)
        
    }
    
}

export default new NifController()