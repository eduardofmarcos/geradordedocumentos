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
    
    private static gerarCnpj() {
        
        const firstDv = [6,7,8,9,2,3,4,5,6,7,8,9]
        const secondDv = [5,6,7,8,9,2,3,4,5,6,7,8,9] 
        
        const Cnpj = []
        
        let firstDvAcc = 0
        let secondDvAcc = 0
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
        
        for (let i = 0; i < 8; i++) {
            Cnpj.push(getRandomArbitrary(0, 10))
        }

        Cnpj.push(0)
        Cnpj.push(0)
        Cnpj.push(0)
        Cnpj.push(1)
        
        Cnpj.forEach((el: any, index) => {
            firstDvAcc = firstDvAcc + (el * firstDv[index])
        })
        
        let firstDVNumber: any = firstDvAcc % 11
        
        firstDVNumber = firstDVNumber === 10 ? 0 : firstDVNumber
        
        Cnpj.push(firstDVNumber)

        Cnpj.forEach((el: any, index) => {
            secondDvAcc = secondDvAcc + (el * secondDv[index])
        })

        let secondDVNumber: any = secondDvAcc % 11

        secondDVNumber= secondDVNumber === 10 ? 0 : secondDVNumber

        Cnpj.push(secondDVNumber)
    
        return `${Cnpj[0]}${Cnpj[1]}.${Cnpj[2]}${Cnpj[3]}${Cnpj[4]}.${Cnpj[5]}${Cnpj[6]}${Cnpj[7]}/0001-${firstDVNumber}${secondDVNumber}`
    }
}