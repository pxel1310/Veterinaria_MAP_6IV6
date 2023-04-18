import { Router } from "express";
import {
  getFisiologias,
  getAllFisiologias,
  postFisiologias,
  putFisiologias,
  deleteFisiologias,
} from "../../../controllers";

const fisiologiasMRoute = Router();

fisiologiasMRoute.get("/", getAllFisiologias);
fisiologiasMRoute.get("/:id", getFisiologias);
fisiologiasMRoute.post("/", postFisiologias);
fisiologiasMRoute.put("/:id", putFisiologias);
fisiologiasMRoute.delete("/:id", deleteFisiologias);

export { fisiologiasMRoute };
