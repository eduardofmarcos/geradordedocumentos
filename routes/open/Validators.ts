import {Router} from 'express';
import AsyncHandlerP from "../../util/AsyncHandlerP/AsyncHandlerP";
import CertidaoController from "../../entities/Certidao/CertidaoController";
import CnhController from "../../entities/Cnh/CnhController";
import MaspController from "../../entities/MaSP/MaspController";

const router = Router();

router.post('/certidao', AsyncHandlerP.handler(CertidaoController.validate))
router.post('/cnh', AsyncHandlerP.handler(CnhController.validate))
router.post('/masp', AsyncHandlerP.handler(MaspController.validate))


export default router;