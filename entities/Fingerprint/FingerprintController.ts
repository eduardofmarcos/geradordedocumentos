import { Response } from "express";
import { OK } from "http-status";
import { logger } from "../../util/Logger/Logger";
import FingerprintService from "./services/FingerprintService";

interface IFingerprintController {
  create(req: any, res: Response): Promise<Response>;
}

class FingerprintController implements IFingerprintController {
  /**
   * create a Fingerprint
   */
  async create(req: any, res: Response): Promise<Response> {
    logger.start("Creating Fingerprint");

    // while in Digital Ocean
    const IP = req.headers["do-connecting-ip"];

    const created: string = await FingerprintService.create(IP);

    logger.success("Fingerprint Created");

    return res.status(OK).json(created);
  }

  async validate(req: any, res: Response): Promise<Response> {
    const valueToValidate = req.body.valueToValidate;

    const isValid = await FingerprintService.validate(valueToValidate);

    logger.success("Fingerprint (whois) validated.");

    return res.status(OK).json(isValid);
  }
}

export default new FingerprintController();
