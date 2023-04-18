import { Router } from "express";

import {
  getExpedienteEnfermedad,
  getAllExpedienteEnfermedad,
  postExpedienteEnfermedad,
  putExpedienteEnfermedad,
  deleteExpedienteEnfermedad,
} from "../../../controllers";

const expedienteEnfermedadRRouter = Router();

expedienteEnfermedadRRouter.get("/", getAllExpedienteEnfermedad);
expedienteEnfermedadRRouter.get("/:id", getExpedienteEnfermedad);
expedienteEnfermedadRRouter.post("/", postExpedienteEnfermedad);
expedienteEnfermedadRRouter.put("/:id", putExpedienteEnfermedad);
expedienteEnfermedadRRouter.delete("/:id", deleteExpedienteEnfermedad);

export { expedienteEnfermedadRRouter };
