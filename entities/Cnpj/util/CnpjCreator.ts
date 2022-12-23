export class CnpjCreator {
    constructor() {
    }
    
    public static CnpjGenerator(): Promise<string> {
        
        const result: string = this.gerarCnpj()
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with Cnpj creation!')
        })
    }
    
    private static gera_random(n: any) {
        let ranNum = Math.round(Math.random() * n);
        return ranNum;
    }
    
    private static mod(dividendo: any, divisor: any) {
        return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
    }
    
    
    private static gerarCnpj(): string {
        let n = 9;
        let n1 = this.gera_random(n);
        let n2 = this.gera_random(n);
        let n3 = this.gera_random(n);
        let n4 = this.gera_random(n);
        let n5 = this.gera_random(n);
        let n6 = this.gera_random(n);
        let n7 = this.gera_random(n);
        let n8 = this.gera_random(n);
        let n9 = 0;//gera_random(n);
        let n10 = 0;//gera_random(n);
        let n11 = 0;//gera_random(n);
        let n12 = 1;//gera_random(n);
        let d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
        d1 = 11 - (this.mod(d1, 11));
        if (d1 >= 10) d1 = 0;
        let d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
        d2 = 11 - (this.mod(d2, 11));
        if (d2 >= 10) d2 = 0;
        let resultado = '' + n1 + n2 + '.' + n3 + n4 + n5 + '.' + n6 + n7 + n8 + '/' + n9 + n10 + n11 + n12 + '-' + d1 + d2;
        return resultado.toString()
    }
    
}