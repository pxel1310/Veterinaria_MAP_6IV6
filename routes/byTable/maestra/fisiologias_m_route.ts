import { Router } from "express";
import {
  getFisiologia,
  getAllFisiologia,
  postFisiologia,
  putFisiologia,
  deleteFisiologia,
} from "../../../controllers";

const fisiologiasMRoute = Router();

fisiologiasMRoute.get("/", getAllFisiologia);
fisiologiasMRoute.get("/:id", getFisiologia);
fisiologiasMRoute.post("/", postFisiologia);
fisiologiasMRoute.put("/:id", putFisiologia);
fisiologiasMRoute.delete("/:id", deleteFisiologia);

export default fisiologiasMRoute;
