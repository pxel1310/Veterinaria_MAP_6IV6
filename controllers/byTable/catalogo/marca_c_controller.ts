import type { Request, Response } from "express";
import type { IMarcaC } from "../../../@types/interfaces";
import cMarca from "../../../models/catalogo/marca_c_model";
import { handleErrorHttp } from "../../../util";

const getAllMarca = async (req: Request, res: Response) => {
  try {
    const [total, marca] = await Promise.all([
      cMarca.count(),
      cMarca.findAll(),
    ]);

    return res.status(200).json({
      total,
      marca,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const getMarca = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const marca = await cMarca.findByPk(id);
    if (!marca) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    return res.status(200).json({
      marca,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const postMarca = async (req: Request, res: Response) => {
  const response = req.body as IMarcaC | IMarcaC[];
  try {
    if (Array.isArray(response)) {
      const marca = await cMarca.bulkCreate(response);
      return res.status(200).json({
        marca,
      });
    } else {
      const marca = await cMarca.create(response);
      return res.status(200).json({
        marca,
      });
    }
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const putMarca = async (req: Request, res: Response) => {
  const response = req.body as IMarcaC;
  const { id } = req.params;

  try {
    const marca = await cMarca.findByPk(id);
    if (!marca) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await marca.update(response);
    return res.status(200).json({
      marca,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const deleteMarca = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const marca = await cMarca.findByPk(id);
    if (!marca) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await marca.destroy();
    return res.status(200).json({
      marca,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

export { getAllMarca, getMarca, postMarca, putMarca, deleteMarca };
