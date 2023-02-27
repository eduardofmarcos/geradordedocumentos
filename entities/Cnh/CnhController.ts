import { Response } from "express";
import { OK } from "http-status";
import { logger } from "../../util/Logger/Logger";
import CnhService from "./services/CnhService";

interface ICnhController {
  create(req: any, res: Response): Promise<Response>;
}

class CnhController implements ICnhController {
  /**
   * create a Cnh
   */
  async create(req: any, res: Response): Promise<Response> {
    logger.start("Creating Cnh");

    const isPointed: boolean = req.query.pointed;
    const qtd: string = req.query.qtd ? req.query.qtd : "1";

    const created: string = await CnhService.create(isPointed, qtd);

    logger.success("Cnh Created");

    return res.status(OK).json(created);
  }

  async validate(req: any, res: Response): Promise<Response> {
    const valueToValidate = req.body.valueToValidate;

    const isValid = await CnhService.validate(valueToValidate);

    logger.success("Cnh Checked");

    return res.status(OK).json(isValid);
  }
}

export default new CnhController();
