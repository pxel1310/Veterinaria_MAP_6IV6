import type { Request, Response } from "express";
import type { IClienteD } from "../../../@types/interfaces";
import dCliente from "../../../models/detalle/cliente_d_model";
import { handleErrorHttp } from "../../../util";

const getAllCliente = async (req: Request, res: Response) => {
  try {
    const [total, cliente] = await Promise.all([
      dCliente.count(),
      dCliente.findAll(),
    ]);

    return res.status(200).json({
      total,
      cliente,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const getCliente = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const cliente = await dCliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    return res.status(200).json({
      cliente,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const postCliente = async (req: Request, res: Response) => {
  const response = req.body as IClienteD | IClienteD[];
  try {
    if (Array.isArray(response)) {
      const cliente = await dCliente.bulkCreate(response);
      return res.status(200).json({
        cliente,
      });
    } else {
      const cliente = await dCliente.create(response);
      return res.status(200).json({
        cliente,
      });
    }
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const putCliente = async (req: Request, res: Response) => {
  const response = req.body as IClienteD;
  const { id } = req.params;

  try {
    const cliente = await dCliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await cliente.update(response);
    return res.status(200).json({
      cliente,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const deleteCliente = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const cliente = await dCliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await cliente.destroy();
    return res.status(200).json({
      cliente,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

export { getAllCliente, getCliente, postCliente, putCliente, deleteCliente };
