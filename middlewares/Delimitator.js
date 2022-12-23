"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delimitator = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const Logger_1 = require("../util/Logger/Logger");
const log = Logger_1.logger;
const delimitator = (req, res, next) => {
    log.request(`${req.method} ${req.originalUrl}`);
    if (req.originalUrl === '/api/v1/transactions/Webhook')
        next();
    else
        body_parser_1.default.json({ limit: process.env.LIMIT_REQUEST_SIZE })(req, res, next);
};
exports.delimitator = delimitator;
