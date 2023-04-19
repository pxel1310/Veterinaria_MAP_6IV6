import { Router } from "express";
import {
  getRaza,
  getAllRaza,
  postRaza,
  putRaza,
  deleteRaza,
} from "../../../controllers";

const razaCRoute = Router();

razaCRoute.get("/", getAllRaza);
razaCRoute.get("/:id", getRaza);
razaCRoute.post("/", postRaza);
razaCRoute.put("/:id", putRaza);
razaCRoute.delete("/:id", deleteRaza);

export default razaCRoute;
