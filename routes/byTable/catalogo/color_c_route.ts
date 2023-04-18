import { Router } from "express";
import {
  getColor,
  getAllColor,
  postColor,
  putColor,
  deleteColor,
} from "../../../controllers";

const colorCRouter = Router();

colorCRouter.get("/", getAllColor);
colorCRouter.get("/:id", getColor);
colorCRouter.post("/", postColor);
colorCRouter.put("/:id", putColor);
colorCRouter.delete("/:id", deleteColor);

export { colorCRouter };
