import { Router } from "express";
import {
  getUsuario,
  getAllUsuario,
  postUsuario,
  putUsuario,
  deleteUsuario,
} from "../../../controllers";
const usuarioMRoute = Router();

usuarioMRoute.get("/", getAllUsuario);
usuarioMRoute.get("/:id", getUsuario);
usuarioMRoute.post("/", postUsuario);
usuarioMRoute.put("/:id", putUsuario);
usuarioMRoute.delete("/:id", deleteUsuario);

export { usuarioMRoute };
