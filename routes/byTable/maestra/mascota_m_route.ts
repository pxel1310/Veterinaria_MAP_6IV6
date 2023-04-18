import { Router } from "express";
import {
  getMascota,
  getAllMascota,
  postMascota,
  putMascota,
  deleteMascota,
} from "../../../controllers";

const mascotaMRoute = Router();

mascotaMRoute.get("/", getAllMascota);
mascotaMRoute.get("/:id", getMascota);
mascotaMRoute.post("/", postMascota);
mascotaMRoute.put("/:id", putMascota);
mascotaMRoute.delete("/:id", deleteMascota);

export { mascotaMRoute };
