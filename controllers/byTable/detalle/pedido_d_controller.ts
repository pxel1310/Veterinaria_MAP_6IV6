import type { Request, Response } from "express";

import type { IPeriodoD } from "../../../@types/interfaces";

import dPeriodo from "../../../models/detalle/periodo_d_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllPeriodo = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, dPeriodo);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getPeriodo = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, dPeriodo);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postPeriodo = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, dPeriodo, req.body as IPeriodoD[]);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putPeriodo = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, dPeriodo);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deletePeriodo = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, dPeriodo);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export { getAllPeriodo, getPeriodo, postPeriodo, putPeriodo, deletePeriodo };
