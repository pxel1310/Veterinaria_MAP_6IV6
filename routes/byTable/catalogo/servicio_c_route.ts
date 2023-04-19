import { Router } from "express";
import {
  getServicio,
  getAllServicio,
  postServicio,
  putServicio,
  deleteServicio,
} from "../../../controllers";

const servicioCRoute = Router();

servicioCRoute.get("/", getAllServicio);
servicioCRoute.get("/:id", getServicio);
servicioCRoute.post("/", postServicio);
servicioCRoute.put("/:id", putServicio);
servicioCRoute.delete("/:id", deleteServicio);

export default servicioCRoute;
