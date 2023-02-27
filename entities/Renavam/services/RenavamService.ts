import { logger } from "../../../util/Logger/Logger";
import { RenavamCreator } from "../util/RenavamCreator";

class RenavamService {
  /**
   * Create Renavam
   */
  async create(isPointed: boolean, qtd: string): Promise<string | any> {
    logger.watch("Creating new Renavam");

    try {
      let RenavamArrayPointed = [];
      let RenavamArray = [];
      let index = Number(qtd) > 10000 ? 10000 : qtd;

      for (let i: number = 0; i < index; i++) {
        let Renavam = await RenavamCreator.RenavamGenerator();

        if (!isPointed) {
          RenavamArray.push(Renavam.replace(/\D/g, ""));
        }

        RenavamArrayPointed.push(Renavam);
      }
      return isPointed ? RenavamArrayPointed : RenavamArray;
    } catch (e) {
      console.log(e);
    }
  }

  async validate(valueToCheck: string): Promise<string | any> {
    try {
      const resultOfValidation = await RenavamCreator.RenavamValidator(
        valueToCheck
      );
      return resultOfValidation;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new RenavamService();
