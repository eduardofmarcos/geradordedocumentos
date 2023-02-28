import { Router } from "express";
import FingerprintController from "../../entities/Fingerprint/FingerprintController";
import AsyncHandlerP from "../../util/AsyncHandlerP/AsyncHandlerP";

const router = Router();

router.get("/fingerprint", AsyncHandlerP.handler(FingerprintController.create));
router.post(
  "/fingerprint",
  AsyncHandlerP.handler(FingerprintController.validate)
);

export default router;
