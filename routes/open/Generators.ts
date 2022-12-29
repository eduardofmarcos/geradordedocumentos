import {Router} from 'express';
import CpfController from "../../entities/Cpf/CpfController";
import CnpjController from '../../entities/Cnpj/CnpjController'
import CCController from "../../entities/CreditCard/CCController";
import CertidaoController from "../../entities/Certidao/CertidaoController";

const router = Router();

router.get('/cpf', CpfController.create);
router.get('/cnpj', CnpjController.create)
router.get('/cc', CCController.create)
router.get('/certidao', CertidaoController.create)


export default router;
