import { Router } from "express";
import {
  getGastoFijo,
  getAllGastoFijo,
  postGastoFijo,
  putGastoFijo,
  deleteGastoFijo,
} from "../../../controllers";

const gastoFijoMRoute = Router();

gastoFijoMRoute.get("/", getAllGastoFijo);
gastoFijoMRoute.get("/:id", getGastoFijo);
gastoFijoMRoute.post("/", postGastoFijo);
gastoFijoMRoute.put("/:id", putGastoFijo);
gastoFijoMRoute.delete("/:id", deleteGastoFijo);

export default gastoFijoMRoute;
