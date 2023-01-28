import {Response} from 'express';
import {OK} from 'http-status';
import {logger} from '../../../util/Logger/Logger';
import PersonService from "./services/PersonService";

interface IPersonController {
    create(req: any, res: Response): Promise<Response>
}

class PersonController implements IPersonController {
    
    /**
     * create a Person
     */
    async create(req: any, res: Response): Promise<Response> {
        
        logger.start('Creating Person')
        
        const isPointed: boolean = req.query.pointed
        const qtd: string = req.query.qtd ? req.query.qtd : "1"
        
        const created: string = await PersonService.create(isPointed, qtd)
        
        logger.success('Person Created')
        
        return res.status(OK).json(created)
        
    }
    
}

export default new PersonController()