import type { Request, Response } from "express";
import type { IVentaD } from "../../../@types/interfaces";
import dVenta from "../../../models/detalle/venta_d_model";
import { handleErrorHttp } from "../../../util";

const getAllVenta = async (req: Request, res: Response) => {
  try {
    const [total, venta] = await Promise.all([
      dVenta.count(),
      dVenta.findAll(),
    ]);

    return res.status(200).json({
      total,
      venta,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const getVenta = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const venta = await dVenta.findByPk(id);
    if (!venta) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    return res.status(200).json({
      venta,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const postVenta = async (req: Request, res: Response) => {
  const response = req.body as IVentaD | IVentaD[];
  try {
    if (Array.isArray(response)) {
      const venta = await dVenta.bulkCreate(response);
      return res.status(200).json({
        venta,
      });
    } else {
      const venta = await dVenta.create(response);
      return res.status(200).json({
        venta,
      });
    }
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const putVenta = async (req: Request, res: Response) => {
  const response = req.body as IVentaD;
  const { id } = req.params;

  try {
    const venta = await dVenta.findByPk(id);
    if (!venta) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await venta.update(response);
    return res.status(200).json({
      venta,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const deleteVenta = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const venta = await dVenta.findByPk(id);
    if (!venta) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await venta.destroy();
    return res.status(200).json({
      venta,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

export { getAllVenta, getVenta, postVenta, putVenta, deleteVenta };
