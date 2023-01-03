export class RgRJCreator {
    constructor() {
    }
    
    public static RgRJGenerator(): Promise<string> {
        
        const result: string = this.gerarRgRJ()
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with RgRJ creation!')
        })
    }
    
    
    private static gerarRgRJ() {
        
        const firstDv = [2, 1, 2, 1, 2, 1, 2]
        
        const RgRJ = []
        
        let firstDvAcc = 0
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
        
        for (let i = 0; i <= 6; i++) {
            RgRJ.push(getRandomArbitrary(0, 10))
        }
        
        RgRJ.forEach((el: any, index) => {
            
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
        
        RgRJ.push(firstDVNumber)
        
        return `${RgRJ[0]}${RgRJ[1]}${RgRJ[2]}${RgRJ[3]}${RgRJ[4]}${RgRJ[5]}${RgRJ[6]}-${RgRJ[7]}`
    }
    
}