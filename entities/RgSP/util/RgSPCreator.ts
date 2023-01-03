export class RgSPCreator {
    constructor() {
    }
    
    public static RgSPGenerator(): Promise<string> {
        
        const result: string = this.gerarRgSP()
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with RgSP creation!')
        })
    }
    
    
    private static gerarRgSP() {
        
        const firstDv = [9, 8, 7, 6, 5, 4, 3, 2]
        
        const RgSP = []
        
        let firstDvAcc = 0
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
        
        for (let i = 0; i <= 7; i++) {
            RgSP.push(getRandomArbitrary(0, 10))
        }
        
        RgSP.forEach((el: any, index) => {
            firstDvAcc = firstDvAcc + (el * firstDv[index])
        })
        
        let firstDVNumber: any = firstDvAcc % 11
        
        if (firstDvAcc % 11 === 10) firstDVNumber = 'X'
        
        RgSP.push(firstDVNumber)
        
        return `${RgSP[0]}${RgSP[1]}${RgSP[2]}${RgSP[3]}${RgSP[4]}${RgSP[5]}${RgSP[6]}${RgSP[7]}-${RgSP[8]}`
    }
    
}