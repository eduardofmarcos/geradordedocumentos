import { logger } from "../../../util/Logger/Logger";
import { ProcessoJCreator } from "../util/ProcessoJCreator";

class ProcessoJService {
  /**
   * Create ProcessoJ
   */
  async create(isPointed: boolean, qtd: string): Promise<string | any> {
    logger.watch("Creating new ProcessoJ");

    try {
      let ProcessoJArrayPointed = [];
      let ProcessoJArray = [];
      let index = Number(qtd) > 10000 ? 10000 : qtd;

      for (let i: number = 0; i < index; i++) {
        let ProcessoJ = await ProcessoJCreator.ProcessoJGenerator();

        if (!isPointed) {
          ProcessoJArray.push(ProcessoJ.replace(/\D/g, ""));
        }

        ProcessoJArrayPointed.push(ProcessoJ);
      }
      return isPointed ? ProcessoJArrayPointed : ProcessoJArray;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new ProcessoJService();
