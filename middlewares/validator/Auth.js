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
const http_status_1 = require("http-status");
const model_1 = __importDefault(require("../../entities/User/model"));
const Schema_1 = require("../../entities/Token/model/Schema");
const Token_1 = __importDefault(require("../../util/Token/Token"));
const APIError_1 = require("../../util/APIError");
const I18N_1 = require("../../util/I18N");
const UserService_1 = __importDefault(require("../../entities/User/services/UserService"));
class Auth {
    /**
     * Verificação de token
     */
    static authToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.token;
            if (token === process.env.YOUCATHOLIC_ACCESS_TOKEN) {
                const user = yield model_1.default.findOne({ _id: req.body.id });
                req.ycProfile = { id: user._id, token, role: Schema_1.eTokenRoles.ADMIN, type: Schema_1.eTokenType.API };
                return next();
            }
            const auth = yield Token_1.default.checkValid(token);
            if (!auth)
                return res.sendStatus(http_status_1.UNAUTHORIZED);
            const { id, role, type } = Token_1.default.decryptToken(token);
            const user = yield UserService_1.default.readById(id);
            if (!user)
                return res.sendStatus(http_status_1.UNAUTHORIZED);
            req.ycProfile = { id, token, role, type };
            if (auth.type === Schema_1.eTokenType.APP) {
                const user = yield model_1.default.findById(auth.requester).lean().exec();
                const profile = { id, token, role, user };
                req.ycProfile = profile;
            }
            return next();
        });
    }
    /**
     * Verificação de admin
     */
    static isAdmin(req, res, next) {
        if (req.ycProfile.role !== Schema_1.eTokenRoles.ADMIN)
            throw new APIError_1.TokenInvalid(I18N_1.I18N.ERROR_MESSAGES.TOKEN.UNAUTHORIZED);
        return next();
    }
}
exports.default = Auth;
