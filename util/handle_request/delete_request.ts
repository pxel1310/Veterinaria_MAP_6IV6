import type { Request, Response } from "express";
import { Model, ModelCtor } from "sequelize";

const handleDeleteRequest = async (
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

  await data.destroy();

  return res.status(204).json({
    msg: `Se ha eliminado el dato en ${nameModel} con el id ${id}`,
  });
};

export { handleDeleteRequest };
