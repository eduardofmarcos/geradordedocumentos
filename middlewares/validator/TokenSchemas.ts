import {Joi} from "express-validation";

export const TokenSchemas = {
    
    tokenCreateFilter: [
        
        "id",
        "password",
        "type",
    
    ],
    
    tokenCreateSchema: {
        
        body: Joi.object({
            
            id: Joi.string().required(),
            password: Joi.string().optional(),
            type: Joi.string().optional()
            
        }),
    },
    
}