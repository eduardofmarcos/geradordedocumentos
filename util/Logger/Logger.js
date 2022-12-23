"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.SignaleHandler = exports.ALogger = void 0;
const signale_1 = __importStar(require("signale"));
class ALogger {
}
exports.ALogger = ALogger;
class SignaleHandler extends ALogger {
    constructor() {
        super(...arguments);
        this.config = { displayTimestamp: true, displayDate: true };
        this.signale = signale_1.default.config(this.config);
    }
    // debug(message: string): void {
    //     return signale.debug(message)
    // }
    start(message) {
        return signale_1.default.start(message);
    }
    watch(message) {
        const options = {
            types: {
                system: {
                    badge: '*',
                    color: 'yellow',
                    label: 'working',
                },
            }
        };
        const custom = new signale_1.Signale(options);
        custom.config(this.config);
        return custom.system(message);
    }
    success(message) {
        return signale_1.default.success(message);
    }
    fatal(message) {
        return signale_1.default.fatal(message);
    }
    request(message) {
        const options = {
            types: {
                remind: {
                    badge: '-',
                    color: 'white',
                    label: 'request',
                },
            }
        };
        const custom = new signale_1.Signale(options);
        custom.config(this.config);
        return custom.remind(message);
    }
    system(message) {
        const options = {
            types: {
                system: {
                    badge: '⏩',
                    color: 'blue',
                    label: 'system',
                },
            }
        };
        const custom = new signale_1.Signale(options);
        custom.config(this.config);
        return custom.system(message);
    }
    mail(message) {
        const options = {
            types: {
                mail: {
                    badge: '✉',
                    color: 'blue',
                    label: 'mail',
                },
            }
        };
        const custom = new signale_1.Signale(options);
        custom.config(this.config);
        return custom.mail(message);
    }
    msgEvent(message) {
        const options = {
            types: {
                mail: {
                    badge: '->',
                    color: 'cyan',
                    label: 'event',
                },
            }
        };
        const custom = new signale_1.Signale(options);
        custom.config(this.config);
        return custom.mail(message);
    }
    audit(message) {
        const options = {
            types: {
                mail: {
                    badge: '+',
                    color: 'blue',
                    label: 'audit',
                },
            }
        };
        const custom = new signale_1.Signale(options);
        custom.config(this.config);
        return custom.mail(message);
    }
}
exports.SignaleHandler = SignaleHandler;
class Logger extends SignaleHandler {
}
exports.logger = new Logger();
