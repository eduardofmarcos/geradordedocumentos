import {Router} from 'express';
import CpfController from "../../entities/generators/Cpf/CpfController";
import CnpjController from '../../entities/generators/Cnpj/CnpjController'
import CCController from "../../entities/generators/CreditCard/CCController";
import CertidaoController from "../../entities/generators/Certidao/CertidaoController";
import NifController from "../../entities/generators/NifPortugal/NifController";
import PersonController from "../../entities/generators/Person/PersonController";
import RgSPController from "../../entities/generators/RgSP/RgSPController";
import RgRJController from "../../entities/generators/RgRJ/RgRJController";
import MaspController from "../../entities/generators/MaSP/MaspController";
import AsyncHandlerP from "../../util/AsyncHandlerP/AsyncHandlerP";
import CnhController from "../../entities/generators/Cnh/CnhController";
import TeController from "../../entities/generators/Te/TeController";
import ProcessoJController from "../../entities/generators/ProcessoJ/ProcessoJController";

const router = Router();

router.get('/cpf', AsyncHandlerP.handler(CpfController.create));
router.get('/cnpj', AsyncHandlerP.handler(CnpjController.create))
router.get('/cc', AsyncHandlerP.handler(CCController.create))
router.get('/certidao', AsyncHandlerP.handler(CertidaoController.create))
router.get('/nif', AsyncHandlerP.handler(NifController.create))
router.get('/person', AsyncHandlerP.handler(PersonController.create))
router.get('/rgsp', AsyncHandlerP.handler(RgSPController.create))
router.get('/rgrj', AsyncHandlerP.handler(RgRJController.create))
router.get('/masp', AsyncHandlerP.handler(MaspController.create))
router.get('/cnh', AsyncHandlerP.handler(CnhController.create))
router.get('/te', AsyncHandlerP.handler(TeController.create))
router.get('/processoj', AsyncHandlerP.handler(ProcessoJController.create))


export default router;
