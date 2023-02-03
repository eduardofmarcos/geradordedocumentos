import {Response} from 'express';
import {OK} from 'http-status';
import {logger} from '../../util/Logger/Logger';
import RegistroEncomendaService from "./services/RegistroEncomendaService";
import PisService from "../Pis/services/PisService";

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
    
    async validate(req: any, res: Response): Promise<Response> {
        
        const valueToValidate = req.body.valueToValidate
        
        const isValid = await RegistroEncomendaService.validate(valueToValidate)
        
        logger.success("Registro de Encomenda Checked")
        
        return res.status(OK).json(isValid)
        
    }
    
}

export default new RegistroEncomendaController()