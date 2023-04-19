import { Router } from "express";
import {
  getEstadoExpediente,
  getAllEstadoExpediente,
  postEstadoExpediente,
  putEstadoExpediente,
  deleteEstadoExpediente,
} from "../../../controllers";

const estadoExpedienteCRouter = Router();

estadoExpedienteCRouter.get("/", getAllEstadoExpediente);
estadoExpedienteCRouter.get("/:id", getEstadoExpediente);
estadoExpedienteCRouter.post("/", postEstadoExpediente);
estadoExpedienteCRouter.put("/:id", putEstadoExpediente);
estadoExpedienteCRouter.delete("/:id", deleteEstadoExpediente);

export default estadoExpedienteCRouter;
