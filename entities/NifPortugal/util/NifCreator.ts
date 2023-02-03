export class NifCreator {
    constructor() {
    }
    
    public static NifGenerator(): Promise<string> {
        
        const result: string = this.gerarNif(null)
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with Nif creation!')
        })
    }
    
    public static NifValidator(valueToCheck: string): Promise<boolean> {
        
        const result = this.validarNif(valueToCheck)
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with Nif validation!')
        })
    }
    
    
    private static gerarNif(arrayDefined: any) {
    
        let Nif = []
    
        Nif = arrayDefined ? arrayDefined : []
       
        const firstDv = [9, 8, 7, 6, 5, 4, 3, 2]
        
        let firstDvAcc = 0
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
    
        if (!arrayDefined) {
            for (let i = 0; i <= 7; i++) {
                Nif.push(getRandomArbitrary(0, 10))
            }
        }
        
        Nif.forEach((el: any, index:any) => {
            firstDvAcc = firstDvAcc + (el * firstDv[index])
        })
        
        let firstDVNumber = 11 - (firstDvAcc % 11)
        
        if (firstDvAcc % 11 === 1 || firstDvAcc % 11 === 0) firstDVNumber = 0
        
        Nif.push(firstDVNumber)
        
        return `${Nif[0]}${Nif[1]}${Nif[2]}${Nif[3]}${Nif[4]}${Nif[5]}${Nif[6]}${Nif[7]}${Nif[8]}`
    }
    
    private static validarNif(valueToCheck: any) {
        
        const cleanData = valueToCheck.replace(/\D/g, '')
        const cleanDataArr = cleanData.split('')
        
        if (cleanDataArr.length !== 9) return false
        
        const dv1 = cleanDataArr[8]
        const Nif = cleanDataArr.slice(0, 8)
        const NifResult = this.gerarNif(Nif)
        const clearNifResult = NifResult.replace(/\D/g, '')
        const dvToCheck1 = clearNifResult[8]
        
        return dv1 === dvToCheck1
        
    }
}