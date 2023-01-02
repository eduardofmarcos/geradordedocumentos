const account1 = [2, 5, 9, 1, 5, 0, 0, 1, 5, 5, 2, 0, 2, 2, 1, 9, 9, 8, 7, 3, 4, 7, 6, 5, 1, 0, 4, 2, 5, 1, 8, 2]
const account2 = [3, 0, 2, 8, 4, 2, 9, 5, 2, 6, 1, 8, 4, 0]

import LuhnValidator from "../../util/data_validators/LuhnValidator";

console.log(LuhnValidator.luhnValidator(account1))
console.log(LuhnValidator.luhnValidator(account2))

// // @ts-ignore
// import {GenCC} from 'creditcard-generator'
//
// const master = GenCC()
// const visa = GenCC('VISA')
// const amex = GenCC('Amex')
//
//
// console.log(master)
// console.log(visa)
// console.log(amex)