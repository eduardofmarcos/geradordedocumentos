export class MaskFilter {
    
    /**
     * Filtra os campos do request
     * @param {unknown} body - Corpo do request
     * @param {string[]} filter - Objeto de filtro
     */
    static validateMask(body: unknown, filter: string[]): unknown {
        
        if (Array.isArray(body)) {
            
            body.forEach(element => this.deleteKeys(element, filter));
            
            return body
            
        }
        
        this.deleteKeys(body, filter);
        
        return body
        
    }
    
    /**
     * Auxilia a função principal deletando os campos do request
     * @param {unknown} body - Corpo do request
     * @param {string[]} filter - Objeto de filtro
     */
    private static deleteKeys(body: any, filter: string[]) {
        
        Object.keys(body).forEach(key => {
            
            if (filter.indexOf(key) == -1) delete body[key];
            
        });
    }
}