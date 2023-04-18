import type { Request, Response } from "express";

import type { ILoteM } from "../../../@types/interfaces";

import mLote from "../../../models/maestra/lote_m_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllLote = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, mLote);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getLote = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, mLote);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postLote = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, mLote, req.body as ILoteM[]);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putLote = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, mLote);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteLote = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, mLote);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export { getAllLote, getLote, postLote, putLote, deleteLote };
