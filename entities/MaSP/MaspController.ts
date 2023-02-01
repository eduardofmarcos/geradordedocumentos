import {Response} from 'express';
import {OK} from 'http-status';
import {logger} from '../../util/Logger/Logger';
import MaspService from "./services/MaspService";
import CnhService from "../Cnh/services/CnhService";

interface IMaspController {
    create(req: any, res: Response): Promise<Response>
}

class MaspController implements IMaspController {
    
    /**
     * create a Masp
     */
    async create(req: any, res: Response): Promise<Response> {
        
        logger.start('Creating Masp - Matricula do Servidor Publico - Minas Gerais')
        
        const isPointed: boolean = req.query.pointed
        const qtd: string = req.query.qtd ? req.query.qtd : "1"
        
        const created: string = await MaspService.create(isPointed, qtd)
        
        logger.success('Masp Created')
        
        return res.status(OK).json(created)
        
    }
    
    async validate(req: any, res: Response) : Promise<Response>{
        
        const valueToValidate = req.body.valueToValidate
        console.log("controller",valueToValidate)
        const isValid = await MaspService.validate(valueToValidate)
        
        logger.success("Masp Checked")
        
        return res.status(OK).json(isValid)
        
    }
    
}

export default new MaspController()