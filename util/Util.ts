export default class Util {
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
    static shouldSend(mailing: string): boolean {
        
        // @ts-ignore
        return process.env.MAIL_SHOULD_SEND.split(',').some(toSend => toSend === mailing);
        
    }

//
//     static shouldIntegrate(leadName: string): boolean {
//
//         return process.env.AGENDOR_SHOULD_INTEGRATE.split(',').some(toCreate => toCreate === leadName);
//
//     }
//
//     static shouldUseIntegration(checking: string): boolean {
//
//         return process.env.INTEGRATION_SHOULD_WORK.split(',').some(toCheck => toCheck === checking);
//
//     }
//
//     /**
//      * Converte data no mês retornando ou o mês em string ou indexado em zero
//      * @param {Date | string} date - Data para conversão.
//      * @param {string} locale - Idioma.
//      */
//     static getMonth(date: Date | string, numberOrString: string, locale: string) {
//
//         const months = {
//             0: I18N.MESSAGES.MONTHS.JANUARY[AvailableLocale[locale]],
//             1: I18N.MESSAGES.MONTHS.FEBRUARY[AvailableLocale[locale]],
//             2: I18N.MESSAGES.MONTHS.MARCH[AvailableLocale[locale]],
//             3: I18N.MESSAGES.MONTHS.APRIL[AvailableLocale[locale]],
//             4: I18N.MESSAGES.MONTHS.MAY[AvailableLocale[locale]],
//             5: I18N.MESSAGES.MONTHS.JUNE[AvailableLocale[locale]],
//             6: I18N.MESSAGES.MONTHS.JULY[AvailableLocale[locale]],
//             7: I18N.MESSAGES.MONTHS.AUGUST[AvailableLocale[locale]],
//             8: I18N.MESSAGES.MONTHS.SEPTEMBER[AvailableLocale[locale]],
//             9: I18N.MESSAGES.MONTHS.OCTOBER[AvailableLocale[locale]],
//             10: I18N.MESSAGES.MONTHS.NOVEMBER[AvailableLocale[locale]],
//             11: I18N.MESSAGES.MONTHS.DECEMBER[AvailableLocale[locale]]
//         }
//
//         const dateToMonth = dayjs(date).month()
//
//         return numberOrString === 'string' ? months[dateToMonth] : dateToMonth
//
//     }
}
