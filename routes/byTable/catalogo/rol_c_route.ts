import { Router } from "express";
import {
  getRol,
  getAllRol,
  postRol,
  putRol,
  deleteRol,
} from "../../../controllers";

const rolCRoute = Router();

rolCRoute.get("/", getAllRol);
rolCRoute.get("/:id", getRol);
rolCRoute.post("/", postRol);
rolCRoute.put("/:id", putRol);
rolCRoute.delete("/:id", deleteRol);

export default rolCRoute;
