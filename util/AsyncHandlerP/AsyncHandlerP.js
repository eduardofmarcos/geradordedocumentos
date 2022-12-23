"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AsyncHandlerP {
    static handler(func) {
        return (req, res, next) => {
            func(req, res, next).catch((err) => next(err));
        };
    }
    ;
}
exports.default = AsyncHandlerP;
