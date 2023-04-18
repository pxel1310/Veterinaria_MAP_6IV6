import { Router } from "express";
import {
  getAllVacuna,
  getVacuna,
  postVacuna,
  putVacuna,
  deleteVacuna,
} from "../../../controllers";

const vacunaCRouter = Router();

vacunaCRouter.get("/", getAllVacuna);
vacunaCRouter.get("/:id", getVacuna);
vacunaCRouter.post("/", postVacuna);
vacunaCRouter.put("/:id", putVacuna);
vacunaCRouter.delete("/:id", deleteVacuna);

export { vacunaCRouter };
