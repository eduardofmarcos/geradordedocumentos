import {Response} from 'express';
import {OK} from 'http-status';
import {logger} from '../../util/Logger/Logger';
import PisService from "./services/PisService";
import NifService from "../NifPortugal/services/NifService";

interface IPisController {
    create(req: any, res: Response): Promise<Response>
}

class PisController implements IPisController {
    
    /**
     * create a Pis
     */
    async create(req: any, res: Response): Promise<Response> {
        
        logger.start('Creating Pis')
        
        const isPointed: boolean = req.query.pointed
        const qtd: string = req.query.qtd ? req.query.qtd : "1"
        
        const created: string = await PisService.create(isPointed, qtd)
        
        logger.success('Pis Created')
        
        return res.status(OK).json(created)
        
    }
    
    async validate(req: any, res: Response): Promise<Response> {
        
        const valueToValidate = req.body.valueToValidate
        
        const isValid = await PisService.validate(valueToValidate)
        
        logger.success("Pis Checked")
        
        return res.status(OK).json(isValid)
        
    }
    
    
}

export default new PisController()