export class MaspCreator {
    constructor() {
    }
    
    public static MaspGenerator(): Promise<string> {
        
        const result: string = this.gerarMasp(null)
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with Masp creation!')
        })
    }
    
    public static MaspValidator(valueToCheck: string): Promise<boolean> {
        
        const result = this.validarMasp(valueToCheck)
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with Certidao validation!')
        })
    }
    
    
    private static gerarMasp(arrayDefined: any) {
    
        let Masp = []
    
        Masp = arrayDefined ? arrayDefined : []
        
        const firstDv = [2, 1, 2, 1, 2, 1, 2]
        
        let firstDvAcc = 0
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
    
        if (!arrayDefined) {
            for (let i = 0; i <= 6; i++) {
                Masp.push(getRandomArbitrary(0, 10))
            }
        }
        
        Masp.forEach((el: any, index:any) => {
            
            if (el * firstDv[index] > 9) {
                let sum = el * firstDv[index]
                let num1 = sum.toString()[0]
                let num2 = sum.toString()[1]
                sum = Number(num1) + Number(num2)
                
                firstDvAcc = firstDvAcc + sum
            } else {
                firstDvAcc = firstDvAcc + (el * firstDv[index])
            }
            
        })
        
        let firstNumToSum = Number(firstDvAcc.toString()[0])
        
        let secNumToSumConcat = Number((firstNumToSum + 1).toString() + 0)
        
        let firstDVNumber: any = secNumToSumConcat - firstDvAcc
        if (firstDVNumber === 10) firstDVNumber = 0
        
        Masp.push(firstDVNumber)
        
        return `${Masp[0]}${Masp[1]}${Masp[2]}${Masp[3]}${Masp[4]}${Masp[5]}${Masp[6]}-${Masp[7]}`
    }
    
    private static validarMasp(valueToCheck: any) {
        
        const cleanData = valueToCheck.replace(/\D/g, '')
        const cleanDataArr = cleanData.split('')
        
        if (cleanDataArr.length !== 8) return false
        
        const dv1 = cleanDataArr[7]
        const Masp = cleanDataArr.slice(0, 7)
        const certidaoResult = this.gerarMasp(Masp)
        const clearCnhResult = certidaoResult.replace(/\D/g, '')
        const dvToCheck1 = clearCnhResult[7]
        
        return dv1 === dvToCheck1
        
    }
    
}