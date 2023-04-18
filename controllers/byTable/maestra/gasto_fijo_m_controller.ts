import type { Request, Response } from "express";

import type { IGastoFijoM } from "../../../@types/interfaces";

import mGastoFijo from "../../../models/maestra/gasto_fijo_m_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllGastoFijo = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, mGastoFijo);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getGastoFijo = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, mGastoFijo);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postGastoFijo = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(
      req,
      res,
      mGastoFijo,
      req.body as IGastoFijoM[]
    );
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putGastoFijo = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, mGastoFijo);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteGastoFijo = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, mGastoFijo);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllGastoFijo,
  getGastoFijo,
  postGastoFijo,
  putGastoFijo,
  deleteGastoFijo,
};
