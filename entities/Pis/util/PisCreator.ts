export class PisCreator {
    constructor() {
    }
    
    public static PisGenerator(): Promise<string> {
        
        const result: string = this.gerarPis(null)
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with Pis creation!')
        })
    }
    
    public static PisValidator(valueToCheck: string): Promise<boolean> {
        
        const result = this.validarPis(valueToCheck)
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with Pis validation!')
        })
    }
    
    
    private static gerarPis(arrayDefined: any) {
        
        let Pis = []
        
        Pis = arrayDefined ? arrayDefined : []
        
        
        const firstDv = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        
        let firstDvAcc = 0
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
        
        if (!arrayDefined) {
            for (let i = 0; i <= 9; i++) {
                Pis.push(getRandomArbitrary(0, 10))
            }
        }
        
        Pis.forEach((el: any, index: any) => {
            firstDvAcc = firstDvAcc + (el * firstDv[index])
        })
        
        let firstDVNumber = firstDvAcc % 11
        firstDVNumber = 11 - firstDVNumber
        const firstDvNumberToPush = firstDVNumber > 9 ? 0 : firstDVNumber
        
        Pis.push(firstDvNumberToPush)
        
        return `${Pis[0]}${Pis[1]}${Pis[2]}.${Pis[3]}${Pis[4]}${Pis[5]}${Pis[6]}${Pis[7]}.${Pis[8]}${Pis[9]}-${Pis[10]}`
    }
    
    private static validarPis(valueToCheck: any) {
        
        const cleanData = valueToCheck.replace(/\D/g, '')
        const cleanDataArr = cleanData.split('')
        
        if (cleanDataArr.length !== 11) return false
        
        const dv1 = cleanDataArr[10]
        const Pis = cleanDataArr.slice(0, 10)
        const PisResult = this.gerarPis(Pis)
        const clearPisResult = PisResult.replace(/\D/g, '')
        const dvToCheck1 = clearPisResult[10]
        
        console.log(dv1, dvToCheck1)
        
        return dv1 === dvToCheck1
        
    }
    
}