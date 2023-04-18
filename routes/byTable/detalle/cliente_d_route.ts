import { Router } from "express";
import {
  getCliente,
  getAllClientes,
  postCliente,
  putCliente,
  deleteCliente,
} from "../../../controllers";

const clienteDRouter = Router();

clienteDRouter.get("/", getAllClientes);
clienteDRouter.get("/:id", getCliente);
clienteDRouter.post("/", postCliente);
clienteDRouter.put("/:id", putCliente);
clienteDRouter.delete("/:id", deleteCliente);

export { clienteDRouter };
