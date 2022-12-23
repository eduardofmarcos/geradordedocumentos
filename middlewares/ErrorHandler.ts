import {ValidationError} from "express-validation";
import {INTERNAL_SERVER_ERROR} from "http-status";
import {APIError} from "../util/APIError";
import {logger} from '../util/Logger/Logger';

const log = logger

export const errorHandling = (error: any, req: any, res: any, next: any) => {
    
    if (process.env.NODE_ENV === "production" && error.code === 500) {
        log.fatal('ERROR: ' + error);
        return res.status(INTERNAL_SERVER_ERROR).send({message: 'Something went wrong :('});
    }
    
    if (error instanceof APIError) {
        
        log.fatal('ERROR: ' + error.message);
        
        return res.status(error.code).json({message: error.getLocalizedMessage(req)});
        
    }
    
    if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error)
    }
    
}