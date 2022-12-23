"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18N = exports.AvailableLocale = void 0;
var AvailableLocale;
(function (AvailableLocale) {
    AvailableLocale["PT_BR"] = "pt_BR";
    AvailableLocale["pt_BR"] = "pt_BR";
    AvailableLocale["pt"] = "pt_BR";
    AvailableLocale["EN_US"] = "en_US";
    AvailableLocale["en_US"] = "en_US";
    AvailableLocale["es"] = "ES";
    AvailableLocale["ES"] = "ES";
})(AvailableLocale = exports.AvailableLocale || (exports.AvailableLocale = {}));
class I18N {
    static getValidLocale(locale) {
        if (typeof locale === 'object') {
            if ('query' in locale) {
                locale = locale.query;
            }
            /* istanbul ignore if */
            if ('locale' in locale) {
                locale = locale.locale;
            }
        }
        //need to fix to get the locale
        // @ts-ignore
        return AvailableLocale[locale] ? locale : I18N.DEFAULT_LOCALE;
    }
}
exports.I18N = I18N;
I18N.DEFAULT_LOCALE = AvailableLocale.EN_US;
I18N.ERROR_MESSAGES = {
    USER: {
        DELETE_ERROR: {
            [AvailableLocale.PT_BR]: 'Não autorizado a deletar este usuário.',
            [AvailableLocale.EN_US]: 'Not authorized to delete this user.',
            [AvailableLocale.ES]: ''
        },
        CREATE: {
            [AvailableLocale.PT_BR]: 'Erro ao criar novo usuário.',
            [AvailableLocale.EN_US]: 'Error on create new user.',
            [AvailableLocale.ES]: ''
        },
        POST: {
            [AvailableLocale.PT_BR]: 'Erro ao postar novo Testemunho. Usuário não ativado.',
            [AvailableLocale.EN_US]: 'Error on post new Testimony. This user is not active',
            [AvailableLocale.ES]: ''
        },
        NOT_FOUND: {
            [AvailableLocale.PT_BR]: 'Usuário não encontrado.',
            [AvailableLocale.EN_US]: 'User not found.',
            [AvailableLocale.ES]: ''
        },
        INVALID_EMAIL: {
            [AvailableLocale.PT_BR]: 'E-mail inválido.',
            [AvailableLocale.EN_US]: 'Invalid E-mail',
            [AvailableLocale.ES]: ''
        },
        EMAIL_EXISTS: {
            [AvailableLocale.PT_BR]: 'E-mail já registrado.',
            [AvailableLocale.EN_US]: 'E-mail already registered.',
            [AvailableLocale.ES]: ''
        },
    },
    TESTIMONY: {
        GENERAL: {
            [AvailableLocale.PT_BR]: 'Erro na operação de testemunho',
            [AvailableLocale.EN_US]: 'Error in Testimony operation.',
            [AvailableLocale.ES]: ''
        },
        CREATE: {
            [AvailableLocale.PT_BR]: 'Erro na criação de testemunho',
            [AvailableLocale.EN_US]: 'Error on create new Testimony',
            [AvailableLocale.ES]: ''
        },
        DELETE_ERROR: {
            [AvailableLocale.PT_BR]: 'Não autorizado a deletar este testemunho.',
            [AvailableLocale.EN_US]: 'Not authorized to delete this Testimony.',
            [AvailableLocale.ES]: ''
        },
        NOT_FOUND: {
            [AvailableLocale.PT_BR]: 'Testemunho não encontrado.',
            [AvailableLocale.EN_US]: 'Testimony not found.',
            [AvailableLocale.ES]: ''
        },
    },
    AUDIT: {
        CREATE: {
            [AvailableLocale.PT_BR]: 'Erro na criação de log',
            [AvailableLocale.EN_US]: 'Error on create log',
            [AvailableLocale.ES]: ''
        },
    },
    TOKEN: {
        CREATE: {
            [AvailableLocale.PT_BR]: 'Erro ao criar token',
            [AvailableLocale.EN_US]: 'Error on create token',
            [AvailableLocale.ES]: ''
        },
        NOT_FOUND: {
            [AvailableLocale.PT_BR]: 'Token não encontrado',
            [AvailableLocale.EN_US]: 'Token not found.',
            [AvailableLocale.ES]: ''
        },
        UNAUTHORIZED: {
            [AvailableLocale.PT_BR]: 'Permissão negada',
            [AvailableLocale.EN_US]: 'Unauthorized.',
            [AvailableLocale.ES]: ''
        },
    },
    VALIDATION: {
        EMAIL: {
            [AvailableLocale.PT_BR]: 'Erro na validação do email.',
            [AvailableLocale.EN_US]: 'Error on email validation.',
            [AvailableLocale.ES]: ''
        },
        PASSWORD: {
            [AvailableLocale.PT_BR]: 'Erro na validação do password.',
            [AvailableLocale.EN_US]: 'Error in password validation.',
            [AvailableLocale.ES]: ''
        },
        ID: {
            [AvailableLocale.PT_BR]: 'Erro na validação do id.',
            [AvailableLocale.EN_US]: 'Error on ID validation.',
            [AvailableLocale.ES]: ''
        },
        IDENTIFIER: {
            [AvailableLocale.PT_BR]: 'Erro na validação do identifier.',
            [AvailableLocale.EN_US]: '',
            [AvailableLocale.ES]: ''
        },
        AUTH: {
            [AvailableLocale.PT_BR]: 'Não autorizado',
            [AvailableLocale.EN_US]: 'Not authorized',
            [AvailableLocale.ES]: 'No autorizado'
        },
        FORMAT: {
            [AvailableLocale.PT_BR]: 'Arquivo no formato incorreto',
            [AvailableLocale.EN_US]: '',
            [AvailableLocale.ES]: ''
        },
    },
};
I18N.MESSAGES = {
    EMAIL_SUBJECT: {
        RECOVER_PASS: {
            [AvailableLocale.PT_BR]: 'YouCatholic - Recuperar senha',
            [AvailableLocale.EN_US]: 'YouCatholic - Password recover',
            [AvailableLocale.ES]: 'YouCatholic - Recuperar contraseña',
        },
        INVALID_EMAIL: {
            [AvailableLocale.PT_BR]: 'E-mail inválido.',
            [AvailableLocale.EN_US]: 'Invalid E-mail.',
            [AvailableLocale.ES]: ''
        }
    },
    USER: {
        LOGIN_OK: {
            [AvailableLocale.PT_BR]: 'Login Success',
            [AvailableLocale.EN_US]: 'Login Success',
            [AvailableLocale.ES]: 'Login Success',
        },
    },
    MONTHS: {
        JANUARY: {
            [AvailableLocale.PT_BR]: 'Janeiro',
            [AvailableLocale.EN_US]: 'January',
            [AvailableLocale.ES]: 'Enero'
        },
        FEBRUARY: {
            [AvailableLocale.PT_BR]: 'Fevereiro',
            [AvailableLocale.EN_US]: 'February',
            [AvailableLocale.ES]: 'Febrero'
        },
        MARCH: {
            [AvailableLocale.PT_BR]: 'Março',
            [AvailableLocale.EN_US]: 'March',
            [AvailableLocale.ES]: 'Marzo'
        },
        APRIL: {
            [AvailableLocale.PT_BR]: 'Abril',
            [AvailableLocale.EN_US]: 'April',
            [AvailableLocale.ES]: 'Abril'
        },
        MAY: {
            [AvailableLocale.PT_BR]: 'Maio',
            [AvailableLocale.EN_US]: 'May',
            [AvailableLocale.ES]: 'Mayo'
        },
        JUNE: {
            [AvailableLocale.PT_BR]: 'Junho',
            [AvailableLocale.EN_US]: 'June',
            [AvailableLocale.ES]: 'Junio'
        },
        JULY: {
            [AvailableLocale.PT_BR]: 'Julho',
            [AvailableLocale.EN_US]: 'July',
            [AvailableLocale.ES]: 'Julio'
        },
        AUGUST: {
            [AvailableLocale.PT_BR]: 'Agosto',
            [AvailableLocale.EN_US]: 'August',
            [AvailableLocale.ES]: 'Agosto'
        },
        SEPTEMBER: {
            [AvailableLocale.PT_BR]: 'Setembro',
            [AvailableLocale.EN_US]: 'September',
            [AvailableLocale.ES]: 'Septiembre'
        },
        OCTOBER: {
            [AvailableLocale.PT_BR]: 'Outubro',
            [AvailableLocale.EN_US]: 'October',
            [AvailableLocale.ES]: 'Octubre'
        },
        NOVEMBER: {
            [AvailableLocale.PT_BR]: 'Novembro',
            [AvailableLocale.EN_US]: 'November',
            [AvailableLocale.ES]: 'Noviembre'
        },
        DECEMBER: {
            [AvailableLocale.PT_BR]: 'Dezembro',
            [AvailableLocale.EN_US]: 'December',
            [AvailableLocale.ES]: 'Diciembre'
        },
    }
};
I18N.TRANSLATE = {};
