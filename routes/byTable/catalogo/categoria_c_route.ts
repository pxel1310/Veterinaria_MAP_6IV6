import { Router } from "express";
import {
  getAllCategoria,
  getCategoria,
  postCategoria,
  putCategoria,
  deleteCategoria,
} from "../../../controllers";

const categoriaCRouter = Router();

categoriaCRouter.get("/", getAllCategoria);
categoriaCRouter.get("/:id", getCategoria);
categoriaCRouter.post("/", postCategoria);
categoriaCRouter.put("/:id", putCategoria);
categoriaCRouter.delete("/:id", deleteCategoria);

export { categoriaCRouter };
