import type { Request, Response } from "express";
import type { IProductoM } from "../../../@types/interfaces";
import mProducto from "../../../models/maestra/producto_m_model";
import { handleErrorHttp } from "../../../util";

const getAllProducto = async (req: Request, res: Response) => {
  try {
    const [total, producto] = await Promise.all([
      mProducto.count(),
      mProducto.findAll(),
    ]);

    return res.status(200).json({
      total,
      producto,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const getProducto = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const producto = await mProducto.findByPk(id);
    if (!producto) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    return res.status(200).json({
      producto,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const postProducto = async (req: Request, res: Response) => {
  const response = req.body as IProductoM | IProductoM[];
  try {
    if (Array.isArray(response)) {
      const producto = await mProducto.bulkCreate(response);
      return res.status(200).json({
        producto,
      });
    } else {
      const producto = await mProducto.create(response);
      return res.status(200).json({
        producto,
      });
    }
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const putProducto = async (req: Request, res: Response) => {
  const response = req.body as IProductoM;
  const { id } = req.params;

  try {
    const producto = await mProducto.findByPk(id);
    if (!producto) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await producto.update(response);
    return res.status(200).json({
      producto,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const deleteProducto = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const producto = await mProducto.findByPk(id);
    if (!producto) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await producto.destroy();
    return res.status(200).json({
      producto,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

export {
  getAllProducto,
  getProducto,
  postProducto,
  putProducto,
  deleteProducto,
};
