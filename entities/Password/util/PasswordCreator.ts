import generator from "generate-password";
import { IPasswordOptions } from "../types/interfaces/interfaces";

export class PasswordCreator {
  constructor() {}

  public static passwordGenerator(
    amount: number,
    options: IPasswordOptions
  ): Promise<string> {
    const result: any = this.gerarPassword(amount, options);

    return new Promise((resolve, reject): void => {
      resolve(result);
      reject("Something went wrong with Password creation!");
    });
  }

  private static gerarPassword(amount: number, options: IPasswordOptions) {
    if (
      !options.numbers &&
      !options.symbols &&
      !options.lowercase &&
      !options.uppercase
    ) {
      return "Pelo menos uns dos seguintes items tem que ser selecionados: Numeros, Simbolos, LowerCase, Uppercase";
    }

    const result: any = generator.generateMultiple(amount, options);

    return result;
  }
}
