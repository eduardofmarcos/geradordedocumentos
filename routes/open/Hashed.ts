import { Router } from "express";
import FingerprintController from "../../entities/Fingerprint/FingerprintController";
import PasswordController from "../../entities/Password/PasswordController";
import AsyncHandlerP from "../../util/AsyncHandlerP/AsyncHandlerP";

const router = Router();

router.post(
  "/password",
  AsyncHandlerP.handler(PasswordController.create)
);

export default router;
