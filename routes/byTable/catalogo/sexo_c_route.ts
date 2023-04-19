import { Router } from "express";
import {
  getSexo,
  getAllSexo,
  postSexo,
  putSexo,
  deleteSexo,
} from "../../../controllers";

const sexoCRoute = Router();

sexoCRoute.get("/", getAllSexo);
sexoCRoute.get("/:id", getSexo);
sexoCRoute.post("/", postSexo);
sexoCRoute.put("/:id", putSexo);
sexoCRoute.delete("/:id", deleteSexo);

export default sexoCRoute;
