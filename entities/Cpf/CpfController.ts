import { Response } from "express";
import { OK } from "http-status";
import { logger } from "../../util/Logger/Logger";
import CpfService from "./services/CpfService";

interface ICpfController {
  create(req: any, res: Response): Promise<Response>;
}

class CpfController implements ICpfController {
  /**
   * create a CPF
   */
  async create(req: any, res: Response): Promise<Response> {
    logger.start("Creating CPF");

    const isPointed: boolean = req.query.pointed;
    const qtd: string = req.query.qtd ? req.query.qtd : "1";

    const created: string = await CpfService.create(isPointed, qtd);

    logger.success("CPF Created");

    return res.status(OK).json(created);
  }

  async validate(req: any, res: Response): Promise<Response> {
    const valueToValidate = req.body.valueToValidate;

    const isValid = await CpfService.validate(valueToValidate);

    logger.success("CPF Checked");

    return res.status(OK).json(isValid);
  }
}

export default new CpfController();
