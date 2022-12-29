import {Response} from 'express';
import {OK} from 'http-status';
import {logger} from '../../util/Logger/Logger';
import CertidaoService from "./services/CertidaoService";

interface ICertidaoController {
    create(req: any, res: Response): Promise<Response>
}

class CertidaoController implements ICertidaoController {
    
    /**
     * create a Certidao
     */
    async create(req: any, res: Response): Promise<Response> {
        
        logger.start('Creating Certidao')
        
        const isPointed: boolean = req.query.pointed
        
        const created : string = await CertidaoService.create(isPointed)
        
        logger.success('Certidao Created')
        
        return res.status(OK).json(created)
        
    }
    
}

export default new CertidaoController()