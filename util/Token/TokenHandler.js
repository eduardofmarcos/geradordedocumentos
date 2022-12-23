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
exports.TokenHandler = void 0;
const APIError_1 = require("../APIError");
const I18N_1 = require("../I18N");
const Logger_1 = require("../Logger/Logger");
/**
 * Classe abstrata de gerador de tokens.
 */
class TokenHandler {
    constructor() {
        this.logger = Logger_1.logger;
    }
    /**
     * Retorna um novo token.
     * @param {IGenerateToken} payloadData - Opções para serem tokenizadas
     */
    generateToken(payloadData) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.watch('Generating Token');
            try {
                return yield this.useGenerator(Object.assign({}, payloadData));
            }
            catch (error) {
                this.logger.fatal(error);
                throw new APIError_1.TokenInvalid(I18N_1.I18N.ERROR_MESSAGES.TOKEN.CREATE);
            }
        });
    }
    /**
     * Retorna o valor decodificado.
     * @param {string} token - Token a ser decodificado
     */
    decryptToken(token) {
        this.logger.watch('Decoding Token');
        return this.useDecoder(token);
    }
    /**
     * Deleta token no banco.
     * @param {string} token - Token a ser decodificado
     * @param {string} searchParam? - parâmetro opcional de procura
     * @param {any} searchValue? - parâmetro opcional de procura
     */
    destroyToken(token, searchParam, searchValue) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.watch('Destroying token');
            return yield this.useMongoDelete(token, searchParam, searchValue);
        });
    }
    /**
     * Checa token no banco.
     * @param {string} token - Token a ser checado
     */
    checkValid(token) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.watch('Check token: ' + token);
            return yield this.useMongoCheck(token);
        });
    }
}
exports.TokenHandler = TokenHandler;
