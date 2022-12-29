// @ts-ignore
import {GenCC} from 'creditcard-generator'
import {ICreditCard} from "../types/interfaces/interfaces";

export class CCCreator {
    constructor() {
    }
    
    public static CCGenerator(flag:string): Promise<ICreditCard> {
        
        /*
        * Visa = Argument = VISA
        * MasterCard = Argument = Master
        * AmericaExpress = Argument = Amex
        * */
        const result: ICreditCard = {
            number: GenCC(flag)[0],
            expireDate: new Date().toLocaleDateString("pt-BR"),
            cvv:`${Math.floor(this.getRandomArbitrary(0,9)).toString()}${Math.floor(this.getRandomArbitrary(0,9)).toString()}${Math.floor(this.getRandomArbitrary(0,9)).toString()}`
        }
        
        return new Promise((resolve, reject): void => {
            resolve(result)
            reject('Something went wrong with CC creation!')
        })
    }
    private static getRandomArbitrary(min:number, max:number) {
        return Math.random() * (max - min) + min;
    }
    
    
}