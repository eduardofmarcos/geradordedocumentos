export class TeCreator {
    constructor() {
    }
    
    public static TeGenerator(state: string): Promise<string> {
        
        const result: string = this.gerarTe(state)
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with Te creation!')
        })
    }
    
    
    private static gerarTe(state: any) {
        
        const stateCod: any = {
            "SP": "01",
            "MG": "02",
            "RJ": "03",
            "RS": "04",
            "BA": "05",
            "PR": "06",
            "CE": "07",
            "PE": "08",
            "SC": "09",
            "GO": "10",
            "MA": "11",
            "PB": "12",
            "PA": "13",
            "ES": "14",
            "PI": "15",
            "RN": "16",
            "AL": "17",
            "MT": "18",
            "MS": "19",
            "DF": "20",
            "SE": "21",
            "AM": "22",
            "RO": "23",
            "AC": "24",
            "AP": "25",
            "RR": "26",
            "TO": "27",
            "EE": "28",
        }
        
        
        const firstDv = [4, 5, 6, 7, 8, 9]
        const secondDv = [7, 8, 9]
        
        const Te = []
        const firstStateNumber = Number(stateCod[state].split('')[0])
        const secondStateNumber = Number(stateCod[state].split('')[1])
        
        let firstDvAcc = 0
        let secondDvAcc = 0
        let firstDVNumber, secondDVNumber
        
        function getRandomArbitrary(min: any, max: any) {
            return Math.floor(Math.random() * (max - min) + min)
        }
        
        for (let i = 0; i <= 5; i++) {
            Te.push(getRandomArbitrary(0, 10))
        }
        
        Te.forEach((el: any, index) => {
            firstDvAcc = firstDvAcc + (el * firstDv[index])
        })
        
        if (state === "01" || state === "02") {
            firstDVNumber = (firstDvAcc % 11) === 10 ? 1 : (firstDvAcc % 11)
        } else {
            firstDVNumber = (firstDvAcc % 11) === 10 ? 0 : (firstDvAcc % 11)
        }
        
        let newArr = [firstStateNumber, secondStateNumber, firstDVNumber]
        newArr.forEach((el: any, index) => {
            secondDvAcc = secondDvAcc + (el * secondDv[index])
        })
        
        if (state === "01" || state === "02") {
            secondDVNumber = (secondDvAcc % 11) === 10 ? 1 : (secondDvAcc % 11)
        } else {
            secondDVNumber = (secondDvAcc % 11) === 10 ? 0 : (secondDvAcc % 11)
        }
        
        
        Te.push(firstStateNumber)
        Te.push(secondStateNumber)
        Te.push(firstDVNumber)
        Te.push(secondDVNumber)
        
        return `${Te[0]}${Te[1]}${Te[2]}${Te[3]}${Te[4]}${Te[5]}${Te[6]}${Te[7]}/${Te[8]}${Te[9]}`
    }
}