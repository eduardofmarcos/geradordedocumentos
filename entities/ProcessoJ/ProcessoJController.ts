import { Response } from "express";
import { OK } from "http-status";
import { logger } from "../../util/Logger/Logger";
import ProcessoJService from "./services/ProcessoJService";

interface IProcessoJController {
  create(req: any, res: Response): Promise<Response>;
}

class ProcessoJController implements IProcessoJController {
  /**
   * create a ProcessoJ
   */
  async create(req: any, res: Response): Promise<Response> {
    logger.start("Creating ProcessoJ");

    const isPointed: boolean = req.query.pointed;
    const qtd: string = req.query.qtd ? req.query.qtd : "1";

    const created: string = await ProcessoJService.create(isPointed, qtd);

    logger.success("ProcessoJ Created");

    return res.status(OK).json(created);
  }
}

export default new ProcessoJController();
