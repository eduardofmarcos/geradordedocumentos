export default class LuhnValidator {
    
    private checkNumber: any
    
    constructor(checkNumber:any) {
        this.checkNumber = checkNumber
    }
    
    public static luhnValidator(arrayToCheck: any) {
        let sumArray = [];
        let numHolder = null;
        let everySecondNumber = 1;
        for (let i = arrayToCheck.length - 1; i >= 0; i--) {
            if (everySecondNumber % 2 === 0) {
                numHolder = arrayToCheck[i] * 2;
                if (numHolder > 9) {
                    numHolder -= 9;
                }
            } else {
                numHolder = arrayToCheck[i];
            }
            sumArray.push(numHolder);
            everySecondNumber++;
        }
        let totalSum = sumArray.reduce((acc,val) => acc + val, 0);
        return totalSum % 10 == 0;
    }
    
}