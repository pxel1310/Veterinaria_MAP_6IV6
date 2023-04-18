import { Router } from "express";
import {
  getAllEnfermedad,
  getEnfermedad,
  postEnfermedad,
  putEnfermedad,
  deleteEnfermedad,
} from "../../../controllers";

const enfermedadCRouter = Router();

enfermedadCRouter.get("/", getAllEnfermedad);
enfermedadCRouter.get("/:id", getEnfermedad);
enfermedadCRouter.post("/", postEnfermedad);
enfermedadCRouter.put("/:id", putEnfermedad);
enfermedadCRouter.delete("/:id", deleteEnfermedad);

export { enfermedadCRouter };
