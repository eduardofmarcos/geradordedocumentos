"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Util {
    //
    //     static isValidDate(date: string) {
    //         return /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/.test(date) && !isNaN(Date.parse(date));
    //     }
    //
    //     static isNumeric(value) {
    //         return !isNaN(parseInt(value));
    //     }
    //
    //     static isEnvProduction(): boolean {
    //         return process.env.NODE_ENV === 'production';
    //     }
    //
    //     static shouldCheck(checking: string): boolean {
    //
    //         return process.env.MAIL_SHOULD_CHECK.split(',').some(toCheck => toCheck === checking);
    //
    //     }
    //
    static shouldSend(mailing) {
        // @ts-ignore
        return process.env.MAIL_SHOULD_SEND.split(',').some(toSend => toSend === mailing);
    }
}
exports.default = Util;
