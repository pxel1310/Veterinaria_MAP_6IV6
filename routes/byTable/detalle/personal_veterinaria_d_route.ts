import { Router } from "express";
import {
  getPersonalVeterinaria,
  getAllPersonalVeterinaria,
  postPersonalVeterinaria,
  putPersonalVeterinaria,
  deletePersonalVeterinaria,
} from "../../../controllers";
const personalVeterinariaDRoute = Router();

personalVeterinariaDRoute.get("/", getAllPersonalVeterinaria);
personalVeterinariaDRoute.get("/:id", getPersonalVeterinaria);
personalVeterinariaDRoute.post("/", postPersonalVeterinaria);
personalVeterinariaDRoute.put("/:id", putPersonalVeterinaria);
personalVeterinariaDRoute.delete("/:id", deletePersonalVeterinaria);

export { personalVeterinariaDRoute };
