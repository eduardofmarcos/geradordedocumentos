import { logger } from "../../../util/Logger/Logger";
import { IPasswordOptions } from "../types/interfaces/interfaces";
import { PasswordCreator } from "../util/PasswordCreator";

class PasswordService {
  /**
   * Create Password
   */
  async create(
    amount: number,
    options: IPasswordOptions
  ): Promise<string | any> {
    logger.watch("Creating new Password");

    try {
      let password = await PasswordCreator.passwordGenerator(amount, options);
      return password;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new PasswordService();
