import type { Request, Response } from "express";
import type { ILoteM } from "../../../@types/interfaces";
import mLote from "../../../models/maestra/lote_m_model";
import { handleErrorHttp } from "../../../util";

const getAllLote = async (req: Request, res: Response) => {
  try {
    const [total, lote] = await Promise.all([mLote.count(), mLote.findAll()]);

    return res.status(200).json({
      total,
      lote,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const getLote = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const lote = await mLote.findByPk(id);
    if (!lote) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    return res.status(200).json({
      lote,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const postLote = async (req: Request, res: Response) => {
  const response = req.body as ILoteM | ILoteM[];
  try {
    if (Array.isArray(response)) {
      const lote = await mLote.bulkCreate(response);
      return res.status(200).json({
        lote,
      });
    } else {
      const lote = await mLote.create(response);
      return res.status(200).json({
        lote,
      });
    }
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const putLote = async (req: Request, res: Response) => {
  const response = req.body as ILoteM;
  const { id } = req.params;

  try {
    const lote = await mLote.findByPk(id);
    if (!lote) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await lote.update(response);
    return res.status(200).json({
      lote,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

const deleteLote = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const lote = await mLote.findByPk(id);
    if (!lote) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await lote.destroy();
    return res.status(200).json({
      lote,
    });
  } catch (e) {
    return handleErrorHttp(req, res, e);
  }
};

export { getAllLote, getLote, postLote, putLote, deleteLote };
