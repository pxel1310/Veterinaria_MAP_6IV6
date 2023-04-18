import { Router } from "express";
import {
  getRol,
  getAllRol,
  postRol,
  putRol,
  deleteRol,
} from "../../../controllers";

const rolCRouter = Router();

rolCRouter.get("/", getAllRol);
rolCRouter.get("/:id", getRol);
rolCRouter.post("/", postRol);
rolCRouter.put("/:id", putRol);
rolCRouter.delete("/:id", deleteRol);

export { rolCRouter };
