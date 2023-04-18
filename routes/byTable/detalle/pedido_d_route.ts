import { Router } from "express";
import {
  getPeriodo,
  getAllPeriodo,
  postPeriodo,
  putPeriodo,
  deletePeriodo,
} from "../../../controllers";

const periodoDRoute = Router();

periodoDRoute.get("/", getAllPeriodo);
periodoDRoute.get("/:id", getPeriodo);
periodoDRoute.post("/", postPeriodo);
periodoDRoute.put("/:id", putPeriodo);
periodoDRoute.delete("/:id", deletePeriodo);

export { periodoDRoute };
