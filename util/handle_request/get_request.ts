import type { Request, Response } from "express";
import { Model, ModelCtor } from "sequelize";

const handleGetRequest = async (
  req: Request,
  res: Response,
  model: ModelCtor<Model>
) => {
  const { id } = req.params;
  const data = await model.findByPk(id);
  const nameModel = model.name;
  if (!data) {
    return res.status(404).json({
      msg: `No existe ningun dato en ${nameModel} con el id ${id}`,
    });
  }
  return res.status(200).json(data);
};

export { handleGetRequest };
