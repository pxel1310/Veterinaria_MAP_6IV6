import { Router } from "express";
import {
  getExpedienteVacuna,
  getAllExpedienteVacuna,
  postExpedienteVacuna,
  putExpedienteVacuna,
  deleteExpedienteVacuna,
} from "../../../controllers";

const expedienteVacunaRRouter = Router();

expedienteVacunaRRouter.get("/", getAllExpedienteVacuna);
expedienteVacunaRRouter.get("/:id", getExpedienteVacuna);
expedienteVacunaRRouter.post("/", postExpedienteVacuna);
expedienteVacunaRRouter.put("/:id", putExpedienteVacuna);
expedienteVacunaRRouter.delete("/:id", deleteExpedienteVacuna);

export { expedienteVacunaRRouter };
