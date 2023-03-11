import { Router } from "express";
import app_routes_generators from "../open/Generators";
// 03736145598991206724598482002365
import app_routes_validators from "../open/Validators";
import app_routes_fingerprints from "../open/FingerPrints";
import app_routes_hashed from '../open/Hashed'

const router = Router();

// router.use(getIP)
router.use("/generators", app_routes_generators);
router.use("/validators", app_routes_validators);
router.use("/fingerprint", app_routes_fingerprints);
router.use("/hashed", app_routes_hashed);

export default router;
