import {Router} from 'express';
import AsyncHandlerP from "../../util/AsyncHandlerP/AsyncHandlerP";
import CertidaoController from "../../entities/Certidao/CertidaoController";

const router = Router();

router.post('/certidao', AsyncHandlerP.handler(CertidaoController.validate))


export default router;