import { Router } from "express";
import {
  getProveedor,
  getAllProveedor,
  postProveedor,
  putProveedor,
  deleteProveedor,
} from "../../../controllers";

const proveedorCRouter = Router();

proveedorCRouter.get("/", getAllProveedor);
proveedorCRouter.get("/:id", getProveedor);
proveedorCRouter.post("/", postProveedor);
proveedorCRouter.put("/:id", putProveedor);
proveedorCRouter.delete("/:id", deleteProveedor);

export { proveedorCRouter };
