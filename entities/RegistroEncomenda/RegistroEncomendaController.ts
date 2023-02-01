import {Response} from 'express';
import {OK} from 'http-status';
import {logger} from '../../util/Logger/Logger';
import RegistroEncomendaService from "./services/RegistroEncomendaService";

interface IRegistroEncomendaController {
    create(req: any, res: Response): Promise<Response>
}

class RegistroEncomendaController implements IRegistroEncomendaController {
    
    /**
     * create a RegistroEncomenda
     */
    async create(req: any, res: Response): Promise<Response> {
        
        logger.start('Creating RegistroEncomenda')
        
        const isPointed: boolean = req.query.pointed
        const qtd: string = req.query.qtd ? req.query.qtd : "1"
        
        const created: string = await RegistroEncomendaService.create(isPointed, qtd)
        
        logger.success('RegistroEncomenda Created')
        
        return res.status(OK).json(created)
        
    }
    
}

export default new RegistroEncomendaController()