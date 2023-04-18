import type { Request, Response } from "express";
import { Model, ModelCtor } from "sequelize";


const handleGetAllRequest = async (
  req: Request,
  res: Response,
  model: ModelCtor<Model>
) => {
  const data = await model.findAll();
  const nameModel = model.name;
  if (!data) {
    return res.status(404).json({
      msg: `No existe ningun dato en ${nameModel}`,
    });
  }
  return res.status(200).json(data);
};

export { handleGetAllRequest };
