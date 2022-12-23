// const account1 = [0,6,2,1,9,7,4,7,9]
// const account2 = [3,0,2,8,4,2,9,5,2,6,1,8,4,0]
//
// import LuhnValidator from "../../util/data_validators/LuhnValidator";
//
// console.log(LuhnValidator.luhnValidator(account1))
// console.log(LuhnValidator.luhnValidator(account2))

// @ts-ignore
import {GenCC} from 'creditcard-generator'

const master = GenCC()
const visa = GenCC('VISA')
const amex = GenCC('Amex')


console.log(master)
console.log(visa)
console.log(amex)