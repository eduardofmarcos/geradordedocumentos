export class CertidaoCreator {
    constructor() {
    }
    
    public static CertidaoGenerator(): Promise<string> {
        
        const result: string = this.gerarCertidao()
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with Certidao creation!')
        })
    }
    
    
    private static gerarCertidao() {
        
        const firstDv = [2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        const secondDv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        
        const certidao = []
        
        let firstDvAcc = 0
        let secondDvAcc = 0
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
        
        for (let i = 0; i <= 29; i++) {
            certidao.push(getRandomArbitrary(0, 10))
        }
        
        certidao.forEach((el: any, index) => {
            firstDvAcc = firstDvAcc + (el * firstDv[index])
        })
        
        const firstDVNumber = (firstDvAcc % 11) === 10 ? 1 : (firstDvAcc % 11)
        certidao.push(firstDVNumber)
        
        certidao.forEach((el: any, index) => {
            secondDvAcc = secondDvAcc + (el * secondDv[index])
        })
        
        const secondDVNumber = (secondDvAcc % 11) === 10 ? 1 : (secondDvAcc % 11)
        certidao.push(secondDVNumber)
        
        
        return `${certidao[0]}${certidao[1]}${certidao[2]}${certidao[3]}${certidao[4]}${certidao[5]} ${certidao[6]}${certidao[7]} ${certidao[8]}${certidao[9]} ${certidao[10]}${certidao[11]}${certidao[12]}${certidao[13]} ${certidao[14]} ${certidao[15]}${certidao[16]}${certidao[17]}${certidao[18]}${certidao[19]} ${certidao[20]}${certidao[21]}${certidao[22]} ${certidao[23]}${certidao[24]}${certidao[25]}${certidao[26]}${certidao[27]}${certidao[28]}${certidao[29]} ${certidao[30]}${certidao[31]}`
    }
}