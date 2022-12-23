"use strict";
// import superagent from 'superagent';
// import WebhookServiceREST, { IUrlCodes } from '../REST/Webhook/WebhookServiceREST';
// import { I18N } from './I18N';
// import { logger } from './Logger/Logger';
//
// interface IEmailChecker {
//
//     checkEmail(email: string): Promise<boolean>
//
// }
//
// abstract class AEmailChecker implements IEmailChecker {
//
//     protected logger = logger
//
//     /**
//      * Utiliza API de checagem de e-mail.
//      * @param {string} email - e-mail para ser validado.
//      */
//     protected async useAPI(email: string): Promise<boolean> {
//
//         const api = `https://api.thechecker.co/v2/verify?email=${email}&api_key=${process.env.MAIL_CHECKER_API_KEY}`
//
//         const response = await superagent.get(api)
//
//         return response.body.result === 'deliverable' ? true : false
//
//
//
//     }
//
//     /**
//      * Checa o saldo da API key.
//      * @returns {boolean} Caso tenha saldo, retorna false. Isso porque quando não tem saldo ele não faz a validação, assim deixa passar o e-mail.
//      */
//     protected async checkCredits(): Promise<number> {
//
//         const api = `https://api.thechecker.co/credit-balance?api_key=${process.env.MAIL_CHECKER_API_KEY}`
//
//         const { body } = await superagent.get(api)
//
//         return body['credit_balance']
//
//     }
//
//     abstract checkEmail(email: string): Promise<boolean>
//
// }
//
// class EmailChecker extends AEmailChecker {
//
//     /**
//      * Valida se o e-mail existe e é válido.
//      * @param {string} email - e-mail para ser validado.
//      */
//     async checkEmail(email: string): Promise<boolean> {
//
//         const credits = await this.checkCredits()
//
//         if (!credits) {
//
//             WebhookServiceREST.adminEvent("email_checker_error", IUrlCodes.GENERAL, {
//                 error: I18N.ERROR_MESSAGES.EMAIL.API,
//                 data: {}
//             })
//
//             return true
//         }
//
//         return await this.useAPI(email)
//
//     }
// }
//
//
// export default new EmailChecker()
