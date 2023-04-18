import type { Request, Response } from "express";
import { Model, ModelCtor } from "sequelize";

const handlePostAllRequest = async (
  req: Request,
  res: Response,
  model: ModelCtor<Model>,
  body: any
) => {
  const data = await model.bulkCreate(body);
  return res.status(200).json(data);
};

export { handlePostAllRequest };
