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

    const created: string = await FingerprintService.create();

    logger.success("Fingerprint Created");

    return res.status(OK).json(created);
  }
}

export default new FingerprintController();
