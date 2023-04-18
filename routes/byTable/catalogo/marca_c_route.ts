import { Router } from "express";
import {
  getMarca,
  getAllMarca,
  postMarca,
  putMarca,
  deleteMarca,
} from "../../../controllers";

const marcaCRouter = Router();

marcaCRouter.get("/", getAllMarca);
marcaCRouter.get("/:id", getMarca);
marcaCRouter.post("/", postMarca);
marcaCRouter.put("/:id", putMarca);
marcaCRouter.delete("/:id", deleteMarca);

export { marcaCRouter };
