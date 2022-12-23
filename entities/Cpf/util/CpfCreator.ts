export class CpfCreator {
    constructor() {
    }
    
    public static cpfGenerator(): Promise<string> {
        
        const result: string = this.gerarCpf()
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with CPF creation!')
        })
    }
    
    
    private static gerarCpf() {
        const num1 = this.aleatorio();
        const num2 = this.aleatorio();
        const num3 = this.aleatorio();
        const dig1 = this.dig(num1, num2, num3);
        const dig2 = this.dig(num1, num2, num3, dig1);
        return `${num1}.${num2}.${num3}-${dig1}${dig2}`;
    }
    
    private static dig(n1: any, n2: any, n3: any, n4?: any) {
        const nums = n1.split("").concat(n2.split(""), n3.split(""));
        if (n4 !== undefined) {
            nums[9] = n4;
        }
        
        let x = 0;
        for (let i = (n4 !== undefined ? 11 : 10), j = 0; i >= 2; i--, j++) {
            x += parseInt(nums[j]) * i;
        }
        
        const y = x % 11;
        return y < 2 ? 0 : 11 - y;
    }
    
    private static aleatorio() {
        const aleat = Math.floor(Math.random() * 999);
        return ("" + aleat).padStart(3, '0');
    }
    
}