"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskFilter = void 0;
class MaskFilter {
    /**
     * Filtra os campos do request
     * @param {unknown} body - Corpo do request
     * @param {string[]} filter - Objeto de filtro
     */
    static validateMask(body, filter) {
        if (Array.isArray(body)) {
            body.forEach(element => this.deleteKeys(element, filter));
            return body;
        }
        this.deleteKeys(body, filter);
        return body;
    }
    /**
     * Auxilia a função principal deletando os campos do request
     * @param {unknown} body - Corpo do request
     * @param {string[]} filter - Objeto de filtro
     */
    static deleteKeys(body, filter) {
        Object.keys(body).forEach(key => {
            if (filter.indexOf(key) == -1)
                delete body[key];
        });
    }
}
exports.MaskFilter = MaskFilter;
