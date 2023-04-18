import { Router } from "express";
import {
  getSexo,
  getAllSexo,
  postSexo,
  putSexo,
  deleteSexo,
} from "../../../controllers";

const sexoCRouter = Router();

sexoCRouter.get("/", getAllSexo);
sexoCRouter.get("/:id", getSexo);
sexoCRouter.post("/", postSexo);
sexoCRouter.put("/:id", putSexo);
sexoCRouter.delete("/:id", deleteSexo);

export { sexoCRouter };
