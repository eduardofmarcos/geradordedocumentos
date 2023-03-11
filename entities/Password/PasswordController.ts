import { Response } from "express";
import { OK } from "http-status";
import { logger } from "../../util/Logger/Logger";
import PasswordService from "./services/PasswordService";
import { IPasswordOptions } from "./types/interfaces/interfaces";

interface IPasswordController {
  create(req: any, res: Response): Promise<Response>;
}

class PasswordController implements IPasswordController {
  /**
   * create a Password
   */
  async create(req: any, res: Response): Promise<Response> {
    logger.start("Creating Password");

    let { amount } = req.body;
    let {
      length,
      numbers,
      symbols,
      lowercase,
      uppercase,
      excludeSimilarCharacters,
      exclude,
      strict,
    }: IPasswordOptions = req.body;

    const created: string = await PasswordService.create(amount, {
      length,
      numbers,
      symbols,
      lowercase,
      uppercase,
      excludeSimilarCharacters,
      exclude,
      strict,
    });

    logger.success("Password Created");

    return res.status(OK).json(created);
  }
}

export default new PasswordController();
