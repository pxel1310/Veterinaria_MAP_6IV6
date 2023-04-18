import { Router } from "express";
import {
  getProductoVenta,
  getAllProductoVenta,
  postProductoVenta,
  putProductoVenta,
  deleteProductoVenta,
} from "../../../controllers";

const productoVentaMRoute = Router();

productoVentaMRoute.get("/", getAllProductoVenta);
productoVentaMRoute.get("/:id", getProductoVenta);
productoVentaMRoute.post("/", postProductoVenta);
productoVentaMRoute.put("/:id", putProductoVenta);
productoVentaMRoute.delete("/:id", deleteProductoVenta);

export { productoVentaMRoute };
