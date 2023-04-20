import type { Request, Response } from "express";
import type { ISexoC } from "../../../@types/interfaces";
import cSexo from "../../../models/catalogo/sexo_c_model";
import { handleErrorHttp } from "../../../util";

const getAllSexo = async (req: Request, res: Response) => {
  try {
    const [total, sexo] = await Promise.all([cSexo.count(), cSexo.findAll()]);

    return res.status(200).json({
      total,
      sexo,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const getSexo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const sexo = await cSexo.findByPk(id);
    if (!sexo) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    return res.status(200).json({
      sexo,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const postSexo = async (req: Request, res: Response) => {
  const response = req.body as ISexoC | ISexoC[];
  console.table(response);
  try {
    if (Array.isArray(response)) {
      const sexo = await cSexo.bulkCreate(response);
      return res.status(200).json({
        sexo,
      });
    } else {
      const sexo = await cSexo.create(response);
      return res.status(200).json({
        sexo,
      });
    }
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const putSexo = async (req: Request, res: Response) => {
  const response = req.body as ISexoC;
  const { id } = req.params;

  try {
    const sexo = await cSexo.findByPk(id);
    if (!sexo) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await sexo.update(response);
    return res.status(200).json({
      sexo,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const deleteSexo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const sexo = await cSexo.findByPk(id);
    if (!sexo) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await sexo.destroy();
    return res.status(200).json({
      sexo,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

export { getAllSexo, getSexo, postSexo, putSexo, deleteSexo };
