import { Router } from "express";
import CpfController from "../../entities/Cpf/CpfController";
import CnpjController from "../../entities/Cnpj/CnpjController";
import CCController from "../../entities/CreditCard/CCController";
import CertidaoController from "../../entities/Certidao/CertidaoController";
import NifController from "../../entities/NifPortugal/NifController";
import PersonController from "../../entities/Person/PersonController";
import RgSPController from "../../entities/RgSP/RgSPController";
import RgRJController from "../../entities/RgRJ/RgRJController";
import MaspController from "../../entities/MaSP/MaspController";
import AsyncHandlerP from "../../util/AsyncHandlerP/AsyncHandlerP";
import CnhController from "../../entities/Cnh/CnhController";
import TeController from "../../entities/Te/TeController";
import ProcessoJController from "../../entities/ProcessoJ/ProcessoJController";
import RegistroEncomendaController from "../../entities/RegistroEncomenda/RegistroEncomendaController";
import PisController from "../../entities/Pis/PisController";
import RenavamController from "../../entities/Renavam/RenavamController";

const router = Router();

router.get("/cpf", AsyncHandlerP.handler(CpfController.create));
router.get("/cnpj", AsyncHandlerP.handler(CnpjController.create));
router.get("/cc", AsyncHandlerP.handler(CCController.create));
router.get("/certidao", AsyncHandlerP.handler(CertidaoController.create));
router.get("/nif", AsyncHandlerP.handler(NifController.create));
router.get("/person", AsyncHandlerP.handler(PersonController.create));
router.get("/rgsp", AsyncHandlerP.handler(RgSPController.create));
router.get("/rgrj", AsyncHandlerP.handler(RgRJController.create));
router.get("/masp", AsyncHandlerP.handler(MaspController.create));
router.get("/cnh", AsyncHandlerP.handler(CnhController.create));
router.get("/te", AsyncHandlerP.handler(TeController.create));
router.get("/processoj", AsyncHandlerP.handler(ProcessoJController.create));
router.get("/reen", AsyncHandlerP.handler(RegistroEncomendaController.create));
router.get("/pis", AsyncHandlerP.handler(PisController.create));
router.get("/renavam", AsyncHandlerP.handler(RenavamController.create));

export default router;
