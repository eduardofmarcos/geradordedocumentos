import bodyParser from "body-parser";
import express from "express";
import { logger } from "../util/Logger/Logger";

const log = logger;

export const delimitator = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  log.request(`${req.method} ${req.originalUrl}`);

  if (req.originalUrl === "/api/v1/transactions/Webhook") next();
  else
    bodyParser.json({ limit: process.env.LIMIT_REQUEST_SIZE })(req, res, next);
};
