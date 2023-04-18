import { Router } from "express";
import {
  getRaza,
  getAllRaza,
  postRaza,
  putRaza,
  deleteRaza,
} from "../../../controllers";

const razaCRouter = Router();

razaCRouter.get("/", getAllRaza);
razaCRouter.get("/:id", getRaza);
razaCRouter.post("/", postRaza);
razaCRouter.put("/:id", putRaza);
razaCRouter.delete("/:id", deleteRaza);

export { razaCRouter };
