"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandling = void 0;
const express_validation_1 = require("express-validation");
const http_status_1 = require("http-status");
const APIError_1 = require("../util/APIError");
const Logger_1 = require("../util/Logger/Logger");
const log = Logger_1.logger;
const errorHandling = (error, req, res, next) => {
    if (process.env.NODE_ENV === "production" && error.code === 500) {
        log.fatal('ERROR: ' + error);
        return res.status(http_status_1.INTERNAL_SERVER_ERROR).send({ message: 'Something went wrong :(' });
    }
    if (error instanceof APIError_1.APIError) {
        log.fatal('ERROR: ' + error.message);
        return res.status(error.code).json({ message: error.getLocalizedMessage(req) });
    }
    if (error instanceof express_validation_1.ValidationError) {
        return res.status(error.statusCode).json(error);
    }
};
exports.errorHandling = errorHandling;
