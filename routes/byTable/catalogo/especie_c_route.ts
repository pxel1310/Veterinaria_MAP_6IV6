import { Router } from "express";
import {
  getAllEspecie,
  getEspecie,
  postEspecie,
  putEspecie,
  deleteEspecie,
} from "../../../controllers";

const especieCRouter = Router();

especieCRouter.get("/", getAllEspecie);
especieCRouter.get("/:id", getEspecie);
especieCRouter.post("/", postEspecie);
especieCRouter.put("/:id", putEspecie);
especieCRouter.delete("/:id", deleteEspecie);

export { especieCRouter };
