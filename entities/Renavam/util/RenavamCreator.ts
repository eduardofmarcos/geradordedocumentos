export class RenavamCreator {
    constructor() {
    }
    
    public static RenavamGenerator(): Promise<string> {
        
        const result: string = this.gerarRenavam()
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with Renavam creation!')
        })
    }
    
    
    private static gerarRenavam() {
        
        const firstDv = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        
        const Renavam = []
        
        let firstDvAcc = 0
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
        
        for (let i = 0; i <= 9; i++) {
            Renavam.push(getRandomArbitrary(0, 10))
        }
        
        Renavam.forEach((el: any, index) => {
            firstDvAcc = firstDvAcc + (el * firstDv[index])
        })
        
        let firstDVNumber = firstDvAcc % 11
        firstDVNumber = 11 - firstDVNumber
        const firstDvNumberToPush = firstDVNumber > 9 ? 0 : firstDVNumber
        
        Renavam.push(firstDvNumberToPush)
        
        return `${Renavam[0]}${Renavam[1]}${Renavam[2]}${Renavam[3]}${Renavam[4]}${Renavam[5]}${Renavam[6]}${Renavam[7]}${Renavam[8]}${Renavam[9]}${Renavam[10]}`
    }
}