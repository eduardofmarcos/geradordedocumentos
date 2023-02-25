export class CpfCreator {
    constructor() {
    }

    public static cpfGenerator(): Promise<string> {
        
        const result: string = this.gerarCPF()
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with RgSP creation!')
        })
    }

    private static gerarCPF() {
        
        const firstDv = [10, 9, 8, 7, 6, 5, 4, 3, 2]
        const secondDv = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2] 
        
        const CPF = []
        
        let firstDvAcc = 0
        let secondDvAcc = 0
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
        
        for (let i = 0; i < 9; i++) {
            CPF.push(getRandomArbitrary(0, 10))
        }
        
        CPF.forEach((el: any, index) => {
            firstDvAcc = firstDvAcc + (el * firstDv[index])
        })
        
        let firstDVNumber: any = firstDvAcc % 11
        
        firstDVNumber = firstDVNumber < 2 ? 0 : (11 - firstDVNumber)
        
        CPF.push(firstDVNumber)

        CPF.forEach((el: any, index) => {
            secondDvAcc = secondDvAcc + (el * secondDv[index])
        })

        let secondDVNumber: any = secondDvAcc % 11

        secondDVNumber= secondDVNumber < 2 ? 0 : (11 - secondDVNumber)

        CPF.push(secondDVNumber)

        return `${CPF[0]}${CPF[1]}${CPF[2]}.${CPF[3]}${CPF[4]}${CPF[5]}.${CPF[6]}${CPF[7]}${CPF[8]}-${CPF[9]}${CPF[10]}`
    }
}