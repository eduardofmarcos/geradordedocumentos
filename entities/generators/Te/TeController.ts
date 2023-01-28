import {Response} from 'express';
import {OK} from 'http-status';
import {logger} from '../../../util/Logger/Logger';
import TeService from "./services/TeService";

interface ITeController {
    create(req: any, res: Response): Promise<Response>
}

class TeController implements ITeController {
    
    /**
     * create a Te
     */
    async create(req: any, res: Response): Promise<Response> {
        
        logger.start('Creating Te')
        
        const isPointed: boolean = req.query.pointed
        const qtd: string = req.query.qtd ? req.query.qtd : "1"
        const state: string = req.query.st ? req.query.st : 'SP'
        
        console.log(state)
        
        const created: string = await TeService.create(isPointed, qtd, state)
        
        logger.success('Te Created')
        
        return res.status(OK).json(created)
        
    }
    
}

export default new TeController()