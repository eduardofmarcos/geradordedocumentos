"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = require("nodemailer");
class Email {
    constructor() {
        this.host = process.env.EMAIL_HOST ? process.env.EMAIL_HOST : "UNAVAILABLE",
            this.port = process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 0,
            this.secure = process.env.EMAIL_SECURE ? Boolean(process.env.EMAIL_SECURE) : true,
            this.auth = {
                user: process.env.EMAIL_USER ? process.env.EMAIL_USER : "UNAVAILABLE",
                pass: process.env.EMAIL_PASS ? process.env.EMAIL_PASS : "UNAVAILABLE"
            };
    }
    mainTransporter() {
        this.transporter = (0, nodemailer_1.createTransport)({
            host: this.host,
            port: this.port,
            secure: false,
            auth: {
                user: this.auth.user,
                pass: this.auth.pass
            }
        });
    }
    sendEmail(from, to, subject, text, html) {
        return __awaiter(this, void 0, void 0, function* () {
            let info = this.transporter.sendMail({
                from,
                to,
                subject,
                text,
                html
            });
            return info;
        });
    }
}
exports.default = Email;
