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
exports.TokenStrategies = void 0;
const index_1 = __importDefault(require("../../entities/Token/model/index"));
const Logger_1 = require("../Logger/Logger");
class TokenStrategies {
    /**
     * Salva token no banco.
     * @param {ITokenMongoStrategy} mongoPayload - Objeto de dados apra ser salvo
     */
    static mongoStrategy(mongoPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            Logger_1.logger.watch(`Saving on Mongo for id: ${mongoPayload.requesterId} - Token: ${mongoPayload.token}`);
            const toSave = { requester: mongoPayload.requesterId, token: mongoPayload.token };
            if (mongoPayload.type)
                toSave.type = mongoPayload.type;
            return yield new index_1.default(toSave).save();
        });
    }
}
exports.TokenStrategies = TokenStrategies;
