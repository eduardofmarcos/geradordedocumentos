export class RegistroEncomendaCreator {
    constructor() {
    }
    
    public static RegistroEncomendaGenerator(): Promise<string> {
        
        const result: string = this.gerarRegistroEncomenda()
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with RegistroEncomenda creation!')
        })
    }
    
    
    private static gerarRegistroEncomenda() {
        
        const firstDv = [8, 6, 4, 2, 3, 5, 9, 7]
        
        const RegistroEncomenda = []
        
        let firstDvAcc = 0
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
        
        for (let i = 0; i <= 7; i++) {
            RegistroEncomenda.push(getRandomArbitrary(0, 10))
        }
        
        RegistroEncomenda.forEach((el: any, index) => {
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
        
        return `${firstLetterArr[randomLetterIndex]} ${RegistroEncomenda[0]}${RegistroEncomenda[1]}${RegistroEncomenda[2]}${RegistroEncomenda[3]}${RegistroEncomenda[4]}${RegistroEncomenda[5]}${RegistroEncomenda[6]}${RegistroEncomenda[7]} ${firstLetterArr[secondLetterIndex]}`
    }
}