import { logger } from "../../../util/Logger/Logger";
import { CnpjCreator } from "../util/CnpjCreator";

class CnpjService {
  /**
   * Create CPF
   */
  async create(isPointed: boolean, qtd: string): Promise<string | any> {
    logger.watch("Creating new CNPJ");

    try {
      let cnpjsArrayPointed = [];
      let cnpjsArray = [];
      let index = Number(qtd) > 10000 ? 10000 : qtd;

      for (let i: number = 0; i < index; i++) {
        let cnpj = await CnpjCreator.CnpjGenerator();

        if (!isPointed) {
          cnpjsArray.push(cnpj.replace(/\D/g, ""));
        }

        cnpjsArrayPointed.push(cnpj);
      }

      return isPointed ? cnpjsArrayPointed : cnpjsArray;
    } catch (e) {
      console.log(e);
    }
  }

  async validate(valueToCheck: string): Promise<string | any> {
    try {
      const resultOfValidation = await CnpjCreator.CnpjValidator(valueToCheck);
      return resultOfValidation;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new CnpjService();
