import type { Request, Response } from "express";
import type { IEstadoExpedienteC } from "../../../@types/interfaces";
import cEstadoExpediente from "../../../models/catalogo/estado_expediente_c_model";
import { handleErrorHttp } from "../../../util";

const getAllEstadoExpediente = async (req: Request, res: Response) => {
  try {
    const [total, estadoExpediente] = await Promise.all([
      cEstadoExpediente.count(),
      cEstadoExpediente.findAll(),
    ]);

    return res.status(200).json({
      total,
      estadoExpediente,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const getEstadoExpediente = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const estadoExpediente = await cEstadoExpediente.findByPk(id);
    if (!estadoExpediente) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    return res.status(200).json({
      estadoExpediente,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const postEstadoExpediente = async (req: Request, res: Response) => {
  const response = req.body as IEstadoExpedienteC | IEstadoExpedienteC[];
  try {
    if (Array.isArray(response)) {
      const estadoExpediente = await cEstadoExpediente.bulkCreate(response);
      return res.status(200).json({
        estadoExpediente,
      });
    } else {
      const estadoExpediente = await cEstadoExpediente.create(response);
      return res.status(200).json({
        estadoExpediente,
      });
    }
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const putEstadoExpediente = async (req: Request, res: Response) => {
  const response = req.body as IEstadoExpedienteC;
  const { id } = req.params;

  try {
    const estadoExpediente = await cEstadoExpediente.findByPk(id);
    if (!estadoExpediente) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await estadoExpediente.update(response);
    return res.status(200).json({
      estadoExpediente,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const deleteEstadoExpediente = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const estadoExpediente = await cEstadoExpediente.findByPk(id);
    if (!estadoExpediente) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await estadoExpediente.destroy();
    return res.status(200).json({
      estadoExpediente,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

export {
  getAllEstadoExpediente,
  getEstadoExpediente,
  postEstadoExpediente,
  putEstadoExpediente,
  deleteEstadoExpediente,
};
