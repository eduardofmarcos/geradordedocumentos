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
        const qtd: string = req.query.qtd ? req.query.qtd : "1"
        
        const created: string = await CertidaoService.create(isPointed, qtd)
        
        logger.success('Certidao Created')
        
        return res.status(OK).json(created)
        
    }
    
    
    async validate(req: any, res: Response): Promise<Response> {
        
        const valueToValidate = req.body.valueToValidate
       
        const isValid = await CertidaoService.validate(valueToValidate)
        
        logger.success("Certidao Checked")
        
        return res.status(OK).json(isValid)
        
    }
    
}

export default new CertidaoController()