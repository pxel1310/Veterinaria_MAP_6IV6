import type { Request, Response } from "express";
import type { IColorC } from "../../../@types/interfaces";
import cColor from "../../../models/catalogo/color_c_model";
import { handleErrorHttp } from "../../../util";

const getAllColor = async (req: Request, res: Response) => {
  try {
    const [total, color] = await Promise.all([
      cColor.count(),
      cColor.findAll(),
    ]);

    return res.status(200).json({
      total,
      color,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const getColor = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const color = await cColor.findByPk(id);
    if (!color) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    return res.status(200).json({
      color,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const postColor = async (req: Request, res: Response) => {
  const response = req.body as IColorC | IColorC[];
  try {
    if (Array.isArray(response)) {
      const color = await cColor.bulkCreate(response);
      return res.status(200).json({
        color,
      });
    } else {
      const color = await cColor.create(response);
      return res.status(200).json({
        color,
      });
    }
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const putColor = async (req: Request, res: Response) => {
  const response = req.body as IColorC;
  const { id } = req.params;
  try {
    const color = await cColor.findByPk(id);
    if (!color) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await color.update(response);
    return res.status(200).json({
      color,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const deleteColor = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const color = await cColor.findByPk(id);
    if (!color) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await color.destroy();
    return res.status(200).json({
      color,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

export { getAllColor, getColor, postColor, putColor, deleteColor };
