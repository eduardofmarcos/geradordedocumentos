"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenSchemas = void 0;
const express_validation_1 = require("express-validation");
exports.TokenSchemas = {
    tokenCreateFilter: [
        "id",
        "password",
        "type",
    ],
    tokenCreateSchema: {
        body: express_validation_1.Joi.object({
            id: express_validation_1.Joi.string().required(),
            password: express_validation_1.Joi.string().optional(),
            type: express_validation_1.Joi.string().optional()
        }),
    },
};
