import { Router } from "express";
import {
  getProducto,
  getAllProducto,
  postProducto,
  putProducto,
  deleteProducto,
} from "../../../controllers";

const productoMRoute = Router();

productoMRoute.get("/", getAllProducto);
productoMRoute.get("/:id", getProducto);
productoMRoute.post("/", postProducto);
productoMRoute.put("/:id", putProducto);
productoMRoute.delete("/:id", deleteProducto);

export { productoMRoute };
