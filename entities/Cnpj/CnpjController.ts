import {Response} from 'express';
import {OK} from 'http-status';
import {logger} from '../../util/Logger/Logger';
import CnpjService from "./services/CnpjService";

interface ICnpjController {
    create(req: any, res: Response): Promise<Response>
}

class CnpjController implements ICnpjController {
    
    /**
     * create a CPF
     */
    async create(req: any, res: Response): Promise<Response> {
        
        logger.start('Creating CNPJ')
        
        const isPointed: boolean = req.query.pointed
        const qtd: string = req.query.qtd ? req.query.qtd : "1"
        
        const created: string = await CnpjService.create(isPointed, qtd)
        
        logger.success('CNPJ Created')
        
        return res.status(OK).json(created)
        
    }

    async validate(req: any, res: Response): Promise<Response> {
        
        const valueToValidate = req.body.valueToValidate
        
        const isValid = await CnpjService.validate(valueToValidate)
        
        logger.success("Cnpj Checked")
        
        return res.status(OK).json(isValid)
        
    }
    
}

export default new CnpjController()