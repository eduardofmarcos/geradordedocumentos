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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = __importDefault(require("../../entities/Token/model/index"));
const TokenHandler_1 = require("./TokenHandler");
const TokenStrategies_1 = require("./TokenStrategies");
/**
 * Classe que estende/implementa a classe de gerar token.
 */
class Token extends TokenHandler_1.TokenHandler {
    constructor() {
        super(...arguments);
        this.defaultSignOptions = { expiresIn: "2h" };
        this.defaultStrategy = 'mongoStrategy';
    }
    /**
     * Gera um novo token.
     * @param {IUseTokenHandler} generatorPayload - Objeto com os dados do token
     */
    useGenerator(generatorPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.watch('Sign payload: ' + JSON.stringify(generatorPayload.payload));
            const options = generatorPayload.options ? generatorPayload.options : this.defaultSignOptions;
            const strategy = generatorPayload.strategy ? generatorPayload.strategy : this.defaultStrategy;
            const token = jsonwebtoken_1.default.sign(generatorPayload.payload, process.env.SECRET_TOKEN, options);
            yield this.useStrategy({ strategy, token, requester: generatorPayload.requester, type: generatorPayload.type });
            return token;
        });
    }
    /**
     * Retorna o dado original.
     * @param {object} token - Token a ser decodificado
     */
    useDecoder(token) {
        this.logger.watch('Token to decode: ' + token);
        return jsonwebtoken_1.default.verify(token, process.env.SECRET_TOKEN);
    }
    /**
     * Define estratégia para lidar com o token.
     * @param {IUseTokenStrategy} strategyPayload - Objeto de opções
     */
    useStrategy(strategyPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (strategyPayload.strategy === 'mongoStrategy')
                return yield TokenStrategies_1.TokenStrategies.mongoStrategy({
                    requesterId: strategyPayload.requester,
                    token: strategyPayload.token,
                    type: strategyPayload.type
                });
        });
    }
    /**
     * Busca e deleta o token do banco.
     * @param {string} token - token
     * @param {string} searchParam - parametro de procura
     * @param {any} searchValue - valor de procura
     */
    useMongoDelete(token, searchParam, searchValue) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!searchParam)
                return yield index_1.default.findOneAndDelete({ token });
            return yield index_1.default.findOneAndDelete({ [searchParam]: searchValue });
        });
    }
    useMongoCheck(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield index_1.default.findOne({ token });
        });
    }
}
exports.default = new Token();
