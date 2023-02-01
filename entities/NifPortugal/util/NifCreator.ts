export class NifCreator {
    constructor() {
    }
    
    public static NifGenerator(): Promise<string> {
        
        const result: string = this.gerarNif()
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with Nif creation!')
        })
    }
    
    
    private static gerarNif() {
        
        const firstDv = [9, 8, 7, 6, 5, 4, 3, 2]
        
        const Nif = []
        
        let firstDvAcc = 0
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
        
        for (let i = 0; i <= 7; i++) {
            Nif.push(getRandomArbitrary(0, 10))
        }
        
        Nif.forEach((el: any, index) => {
            firstDvAcc = firstDvAcc + (el * firstDv[index])
        })
        
        let firstDVNumber = 11 - (firstDvAcc % 11)
        
        if (firstDvAcc % 11 === 1 || firstDvAcc % 11 === 0) firstDVNumber = 0
        
        Nif.push(firstDVNumber)
        
        return `${Nif[0]}${Nif[1]}${Nif[2]}${Nif[3]}${Nif[4]}${Nif[5]}${Nif[6]}${Nif[7]}${Nif[8]}`
    }
}