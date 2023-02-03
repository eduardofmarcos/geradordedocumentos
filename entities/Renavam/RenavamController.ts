import {Response} from 'express';
import {OK} from 'http-status';
import {logger} from '../../util/Logger/Logger';
import RenavamService from "./services/RenavamService";
import PisService from "../Pis/services/PisService";

interface IRenavamController {
    create(req: any, res: Response): Promise<Response>
}

class RenavamController implements IRenavamController {
    
    /**
     * create a Renavam
     */
    async create(req: any, res: Response): Promise<Response> {
        
        logger.start('Creating Renavam')
        
        const isPointed: boolean = req.query.pointed
        const qtd: string = req.query.qtd ? req.query.qtd : "1"
        
        const created: string = await RenavamService.create(isPointed, qtd)
        
        logger.success('Renavam Created')
        
        return res.status(OK).json(created)
        
    }
    
    async validate(req: any, res: Response): Promise<Response> {
        
        const valueToValidate = req.body.valueToValidate
        
        const isValid = await RenavamService.validate(valueToValidate)
        
        logger.success("Renavam Checked")
        
        return res.status(OK).json(isValid)
        
    }
    
}

export default new RenavamController()