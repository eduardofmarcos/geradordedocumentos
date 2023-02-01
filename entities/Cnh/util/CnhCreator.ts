export class CnhCreator {
    constructor() {
    }
    
    public static CnhGenerator(): Promise<string> {
        
        const result: string = this.gerarCnh()
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with Cnh creation!')
        })
    }
    
    
    private static gerarCnh() {
        
        const firstDv = [2, 3, 4, 5, 6, 7, 8, 9, 10]
        const secondDv = [3, 4, 5, 6, 7, 8, 9, 10, 11, 2]
        
        const Cnh = []
        
        let firstDvAcc = 0
        let secondDvAcc = 0
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
        
        for (let i = 0; i <= 8; i++) {
            Cnh.push(getRandomArbitrary(0, 10))
        }
        
        Cnh.forEach((el: any, index) => {
            firstDvAcc = firstDvAcc + (el * firstDv[index])
        })
        const firstDVNumber = firstDvAcc % 11 >= 10 || firstDvAcc % 11 <= 1 ? 0 : firstDvAcc % 11
        const numberToPush = firstDVNumber ? 11 - firstDVNumber : 0
        Cnh.push(numberToPush)
        
        
        Cnh.forEach((el: any, index) => {
            secondDvAcc = secondDvAcc + (el * secondDv[index])
        })
        const secondDVNumber = secondDvAcc % 11 >= 10 || secondDvAcc % 11 <= 1 ? 0 : secondDvAcc % 11
        const numberToPush2 = secondDVNumber ? 11 - secondDVNumber : 0
        Cnh.push(numberToPush2)
        
        return `${Cnh[0]}${Cnh[1]}${Cnh[2]}${Cnh[3]}${Cnh[4]}${Cnh[5]}${Cnh[6]}${Cnh[7]}${Cnh[8]}${Cnh[9]}${Cnh[10]}`
    }
}