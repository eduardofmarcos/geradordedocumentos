export class PisCreator {
    constructor() {
    }
    
    public static PisGenerator(): Promise<string> {
        
        const result: string = this.gerarPis()
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with Pis creation!')
        })
    }
    
    
    private static gerarPis() {
        
        const firstDv = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        
        const Pis = []
        
        let firstDvAcc = 0
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
        
        for (let i = 0; i <= 9; i++) {
            Pis.push(getRandomArbitrary(0, 10))
        }
        
        Pis.forEach((el: any, index) => {
            firstDvAcc = firstDvAcc + (el * firstDv[index])
        })
        
        let firstDVNumber = firstDvAcc % 11
        firstDVNumber = 11 - firstDVNumber
        const firstDvNumberToPush = firstDVNumber > 9 ? 0 : firstDVNumber
        
        Pis.push(firstDvNumberToPush)
        
        return `${Pis[0]}${Pis[1]}${Pis[2]}.${Pis[3]}${Pis[4]}${Pis[5]}${Pis[6]}${Pis[7]}.${Pis[8]}${Pis[9]}-${Pis[10]}`
    }
}