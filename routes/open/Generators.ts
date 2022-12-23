import {Router} from 'express';
import CpfController from "../../entities/Cpf/CpfController";
import CnpjController from '../../entities/Cnpj/CnpjController'
import CCController from "../../entities/CreditCard/CCController";

const router = Router();

router.get('/cpf', CpfController.create);
router.get('/cnpj', CnpjController.create)
router.get('/cc', CCController.create)


export default router;
