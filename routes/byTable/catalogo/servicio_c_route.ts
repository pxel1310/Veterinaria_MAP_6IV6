import { Router } from "express";
import {
  getServicio,
  getAllServicio,
  postServicio,
  putServicio,
  deleteServicio,
} from "../../../controllers";

const servicioCRouter = Router();

servicioCRouter.get("/", getAllServicio);
servicioCRouter.get("/:id", getServicio);
servicioCRouter.post("/", postServicio);
servicioCRouter.put("/:id", putServicio);
servicioCRouter.delete("/:id", deleteServicio);

export { servicioCRouter };
