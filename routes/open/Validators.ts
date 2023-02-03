import {Router} from 'express';
import AsyncHandlerP from "../../util/AsyncHandlerP/AsyncHandlerP";
import CertidaoController from "../../entities/Certidao/CertidaoController";
import CnhController from "../../entities/Cnh/CnhController";
import MaspController from "../../entities/MaSP/MaspController";
import NifController from "../../entities/NifPortugal/NifController";
import PisController from "../../entities/Pis/PisController";
import RegistroEncomendaController from "../../entities/RegistroEncomenda/RegistroEncomendaController";
import RenavamController from "../../entities/Renavam/RenavamController";

const router = Router();

router.post('/certidao', AsyncHandlerP.handler(CertidaoController.validate))
router.post('/cnh', AsyncHandlerP.handler(CnhController.validate))
router.post('/masp', AsyncHandlerP.handler(MaspController.validate))
router.post('/nif', AsyncHandlerP.handler(NifController.validate))
router.post('/pis', AsyncHandlerP.handler(PisController.validate))
router.post('/reen', AsyncHandlerP.handler(RegistroEncomendaController.validate))
router.post('/renavam', AsyncHandlerP.handler(RenavamController.validate))


export default router;