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
exports.Uploader = void 0;
const imagekit_1 = __importDefault(require("imagekit"));
class Uploader {
    constructor(file, fileName) {
        this.imageKit = new imagekit_1.default({
            publicKey: "public_WVp93F7cqaJyu/CjGXEQo4IqunY=",
            privateKey: "private_Fbrjg9ii5EcFslgjrfs5RVjRX2E=",
            urlEndpoint: "https://ik.imagekit.io/XBKMXDRFLyLV3hMJJwSz"
        });
        this.imageUrl = this.imageKit.url({
            src: "https://ik.imagekit.io/your_imagekit_id/endpoint/default-image.jpg",
            transformation: [{
                    "height": "300",
                    "width": "400"
                }]
        });
        this.file = file;
        this.fileName = fileName;
    }
    uploadImageToServer() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.imageKit.upload({
                file: this.file,
                fileName: this.fileName,
                extensions: [
                    {
                        name: "google-auto-tagging",
                        maxTags: 5,
                        minConfidence: 95
                    }
                ]
            });
            return result.thumbnailUrl;
        });
    }
}
exports.Uploader = Uploader;
