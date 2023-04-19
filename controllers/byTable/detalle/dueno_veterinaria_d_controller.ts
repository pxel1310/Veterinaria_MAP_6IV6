import type { Request, Response } from "express";
import type { IDuenoVeterinariaD } from "../../../@types/interfaces";
import dDuenoVeterinaria from "../../../models/detalle/dueno_veterinaria_d_model";
import { handleErrorHttp } from "../../../util";

const getAllDuenoVeterinaria = async (req: Request, res: Response) => {
  try {
    const [total, duenoVeterinaria] = await Promise.all([
      dDuenoVeterinaria.count(),
      dDuenoVeterinaria.findAll(),
    ]);

    return res.status(200).json({
      total,
      duenoVeterinaria,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const getDuenoVeterinaria = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const duenoVeterinaria = await dDuenoVeterinaria.findByPk(id);
    if (!duenoVeterinaria) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    return res.status(200).json({
      duenoVeterinaria,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const postDuenoVeterinaria = async (req: Request, res: Response) => {
  const response = req.body as IDuenoVeterinariaD | IDuenoVeterinariaD[];
  try {
    if (Array.isArray(response)) {
      const duenoVeterinaria = await dDuenoVeterinaria.bulkCreate(response);
      return res.status(200).json({
        duenoVeterinaria,
      });
    } else {
      const duenoVeterinaria = await dDuenoVeterinaria.create(response);
      return res.status(200).json({
        duenoVeterinaria,
      });
    }
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const putDuenoVeterinaria = async (req: Request, res: Response) => {
  const response = req.body as IDuenoVeterinariaD;
  const { id } = req.params;

  try {
    const duenoVeterinaria = await dDuenoVeterinaria.findByPk(id);
    if (!duenoVeterinaria) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await duenoVeterinaria.update(response);
    return res.status(200).json({
      duenoVeterinaria,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const deleteDuenoVeterinaria = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const duenoVeterinaria = await dDuenoVeterinaria.findByPk(id);
    if (!duenoVeterinaria) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await duenoVeterinaria.destroy();
    return res.status(200).json({
      duenoVeterinaria,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

export {
  getAllDuenoVeterinaria,
  getDuenoVeterinaria,
  postDuenoVeterinaria,
  putDuenoVeterinaria,
  deleteDuenoVeterinaria,
};
