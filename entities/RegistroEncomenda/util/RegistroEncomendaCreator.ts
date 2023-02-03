export class RegistroEncomendaCreator {
    constructor() {
    }
    
    public static RegistroEncomendaGenerator(): Promise<string> {
        
        const result: string = this.gerarRegistroEncomenda(null)
        console.log(result)
        return new Promise((resolve, reject): void => {
            reject('Something went wrong with RegistroEncomenda creation!')
        })
    }
    
    public static RegistroEncomendaValidator(valueToCheck: string): Promise<boolean> {
        
        const result = this.validarRegistroEncomenda(valueToCheck)
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with Nif validation!')
        })
    }
    
    
    private static gerarRegistroEncomenda(arrayDefined: any) {
    
        let RegistroEncomenda = []
    
        RegistroEncomenda = arrayDefined ? arrayDefined : []
        
        const firstDv = [8, 6, 4, 2, 3, 5, 9, 7]
        
        let firstDvAcc = 0
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
    
        if (!arrayDefined) {
            for (let i = 0; i <= 7; i++) {
                RegistroEncomenda.push(getRandomArbitrary(0, 10))
            }
        }
        
        RegistroEncomenda.forEach((el: any, index:any) => {
            firstDvAcc = firstDvAcc + (el * firstDv[index])
        })
        
        let firstDVNumber = firstDvAcc % 11
        
        if (firstDVNumber === 0) {
            firstDVNumber = 5
        } else if (firstDVNumber === 1) {
            firstDVNumber = 0
        }
        
        firstDVNumber = 11 - firstDVNumber
        
        RegistroEncomenda.push(firstDVNumber)
        
        const firstLetterArr = ["OH", "PU", "AA", "AA", "AS", "BE", "BF", "CA", "CB", "CC", "CD", "DC", "DD", "DE", "DF", "DG", "DV", "DY", "EC", "EE", "EJ", "EM", "ER", "FC", "FJ", "ID", "IK", "IN", "JA", "JF", "JM", "JR", "LA", "LB"]
        const randomLetterIndex = getRandomArbitrary(0, firstLetterArr.length)
        const secondLetterIndex = getRandomArbitrary(0, firstLetterArr.length)
        
        return `${firstLetterArr[randomLetterIndex]} ${RegistroEncomenda[0]}${RegistroEncomenda[1]}${RegistroEncomenda[2]}${RegistroEncomenda[3]}${RegistroEncomenda[4]}${RegistroEncomenda[5]}${RegistroEncomenda[6]}${RegistroEncomenda[7]}${RegistroEncomenda[8]} ${firstLetterArr[secondLetterIndex]}`
    }
    
    private static validarRegistroEncomenda(valueToCheck: any) {
        console.log('passou aqui?')
        const cleanData = valueToCheck.replace(/\D/g, '')
        const cleanDataArr = cleanData.split('')
        
        if (cleanDataArr.length !== 9) return false
        
        const dv1 = cleanDataArr[8]
        const RegistroEncomenda = cleanDataArr.slice(0, 8)
        const RegistroEncomendaResult = this.gerarRegistroEncomenda(RegistroEncomenda)
        const clearRegistroEncomendaResult = RegistroEncomendaResult.replace(/\D/g, '')
        const dvToCheck1 = clearRegistroEncomendaResult[8]
        
        return dv1 === dvToCheck1
        
    }
}