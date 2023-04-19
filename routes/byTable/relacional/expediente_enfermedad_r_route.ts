import { Router } from "express";

import {
  getExpedienteEnfermedad,
  getAllExpedienteEnfermedad,
  postExpedienteEnfermedad,
  putExpedienteEnfermedad,
  deleteExpedienteEnfermedad,
} from "../../../controllers";

const expedienteEnfermedadRRoute = Router();

expedienteEnfermedadRRoute.get("/", getAllExpedienteEnfermedad);
expedienteEnfermedadRRoute.get("/:id", getExpedienteEnfermedad);
expedienteEnfermedadRRoute.post("/", postExpedienteEnfermedad);
expedienteEnfermedadRRoute.put("/:id", putExpedienteEnfermedad);
expedienteEnfermedadRRoute.delete("/:id", deleteExpedienteEnfermedad);

export default expedienteEnfermedadRRoute;
