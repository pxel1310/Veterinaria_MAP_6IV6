import { Router } from "express";
import {
  getDuenoVeterinaria,
  getAllDuenosVeterinarias,
  postDuenoVeterinaria,
  putDuenoVeterinaria,
  deleteDuenoVeterinaria,
} from "../../../controllers";
const duenoVeterinariaDRoute = Router();

duenoVeterinariaDRoute.get("/", getAllDuenosVeterinarias);
duenoVeterinariaDRoute.get("/:id", getDuenoVeterinaria);
duenoVeterinariaDRoute.post("/", postDuenoVeterinaria);
duenoVeterinariaDRoute.put("/:id", putDuenoVeterinaria);
duenoVeterinariaDRoute.delete("/:id", deleteDuenoVeterinaria);

export { duenoVeterinariaDRoute };
