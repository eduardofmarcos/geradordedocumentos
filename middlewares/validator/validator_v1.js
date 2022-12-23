"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const APIError_1 = require("../../util/APIError");
const I18N_1 = require("../../util/I18N");
class Validator {
    static areaValidator() {
        return [
            (0, express_validator_1.param)('id').isMongoId().withMessage('Invalid provider Id')
        ];
    }
    static areaUpdate() {
        return [
            (0, express_validator_1.param)('id').isMongoId().withMessage('Invalid Id'),
            (0, express_validator_1.body)('enabled').isBoolean().withMessage('Just strings'),
            (0, express_validator_1.body)('name').isString().withMessage('Just strings'),
        ];
    }
    static login() {
        return [
            (0, express_validator_1.body)('password').isString().withMessage('Invalid password'),
            (0, express_validator_1.body)('email').isEmail().withMessage('Invalid e-mail'),
        ];
    }
    static recoverEmail() {
        return [
            (0, express_validator_1.body)('email').isEmail(),
        ];
    }
    static validate(req, res, next) {
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty())
            return next();
        errors.array().forEach(err => {
            if (err.param === 'email')
                throw new APIError_1.ValidationError(I18N_1.I18N.ERROR_MESSAGES.VALIDATION.EMAIL);
            if (err.param === 'password')
                throw new APIError_1.ValidationError(I18N_1.I18N.ERROR_MESSAGES.VALIDATION.PASSWORD);
            /* istanbul ignore next */
            if (err.param === 'identifier')
                throw new APIError_1.ValidationError(I18N_1.I18N.ERROR_MESSAGES.VALIDATION.IDENTIFIER);
            /* istanbul ignore next */
            if (err.param === 'id')
                throw new APIError_1.ValidationError(I18N_1.I18N.ERROR_MESSAGES.VALIDATION.ID);
        });
        /* istanbul ignore next */
        return next();
    }
}
exports.default = Validator;
