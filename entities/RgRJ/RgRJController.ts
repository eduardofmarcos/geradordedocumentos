import { Response } from "express";
import { OK } from "http-status";
import { logger } from "../../util/Logger/Logger";
import RgRJService from "./services/RgRJService";

interface IRgRJController {
  create(req: any, res: Response): Promise<Response>;
}

class RgRJController implements IRgRJController {
  /**
   * create a RgRJ
   */
  async create(req: any, res: Response): Promise<Response> {
    logger.start("Creating RgRJ - IFP/RJ");

    const isPointed: boolean = req.query.pointed;
    const qtd: string = req.query.qtd ? req.query.qtd : "1";

    const created: string = await RgRJService.create(isPointed, qtd);

    logger.success("RgRJ Created");

    return res.status(OK).json(created);
  }

  async validate(req: any, res: Response): Promise<Response> {
    const valueToValidate = req.body.valueToValidate;

    const isValid = await RgRJService.validate(valueToValidate);

    logger.success("RgRJ Checked");

    return res.status(OK).json(isValid);
  }
}

export default new RgRJController();
