import {body, param, validationResult} from 'express-validator';
import {ValidationError} from '../../util/APIError';
import {I18N} from '../../util/I18N';

export default class Validator {
    
    public static areaValidator() {
        
        return [
            param('id').isMongoId().withMessage('Invalid provider Id')
        ]
    }
    
    public static areaUpdate() {
        
        return [
            param('id').isMongoId().withMessage('Invalid Id'),
            body('enabled').isBoolean().withMessage('Just strings'),
            body('name').isString().withMessage('Just strings'),
        ]
    }
    
    public static login() {
        
        return [
            body('password').isString().withMessage('Invalid password'),
            body('email').isEmail().withMessage('Invalid e-mail'),
        ]
    }
    
    public static recoverEmail() {
        
        return [
            body('email').isEmail(),
        ]
    }
    
    public static validate(req: any, res: any, next: any) {
        
        const errors = validationResult(req)
        
        if (errors.isEmpty()) return next()
        
        errors.array().forEach(err => {
            
            if (err.param === 'email') throw new ValidationError(I18N.ERROR_MESSAGES.VALIDATION.EMAIL);
            if (err.param === 'password') throw new ValidationError(I18N.ERROR_MESSAGES.VALIDATION.PASSWORD);
            /* istanbul ignore next */
            if (err.param === 'identifier') throw new ValidationError(I18N.ERROR_MESSAGES.VALIDATION.IDENTIFIER);
            /* istanbul ignore next */
            if (err.param === 'id') throw new ValidationError(I18N.ERROR_MESSAGES.VALIDATION.ID);
            
        })
        /* istanbul ignore next */
        return next()
        
    }
}