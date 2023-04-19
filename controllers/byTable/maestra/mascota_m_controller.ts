import type { Request, Response } from "express";
import type { IMascotaM } from "../../../@types/interfaces";
import mMascota from "../../../models/maestra/mascota_m_model";
import { handleErrorHttp } from "../../../util";

const getAllMascota = async (req: Request, res: Response) => {
  try {
    const [total, mascota] = await Promise.all([
      mMascota.count(),
      mMascota.findAll(),
    ]);

    return res.status(200).json({
      total,
      mascota,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const getMascota = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const mascota = await mMascota.findByPk(id);
    if (!mascota) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    return res.status(200).json({
      mascota,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const postMascota = async (req: Request, res: Response) => {
  const response = req.body as IMascotaM | IMascotaM[];
  try {
    if (Array.isArray(response)) {
      const mascota = await mMascota.bulkCreate(response);
      return res.status(200).json({
        mascota,
      });
    } else {
      const mascota = await mMascota.create(response);
      return res.status(200).json({
        mascota,
      });
    }
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const putMascota = async (req: Request, res: Response) => {
  const response = req.body as IMascotaM;
  const { id } = req.params;

  try {
    const mascota = await mMascota.findByPk(id);
    if (!mascota) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await mascota.update(response);
    return res.status(200).json({
      mascota,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const deleteMascota = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const mascota = await mMascota.findByPk(id);
    if (!mascota) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await mascota.destroy();
    return res.status(200).json({
      mascota,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

export { getAllMascota, getMascota, postMascota, putMascota, deleteMascota };
