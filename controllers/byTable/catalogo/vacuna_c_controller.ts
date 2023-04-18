import type { Request, Response } from "express";

import type { IVacunaC } from "../../../@types/interfaces";

import cVacuna from "../../../models/catalogo/vacuna_c_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllVacuna = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, cVacuna);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getVacuna = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, cVacuna);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postVacuna = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, cVacuna, req.body as IVacunaC[]);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putVacuna = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, cVacuna);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteVacuna = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, cVacuna);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export { getAllVacuna, getVacuna, postVacuna, putVacuna, deleteVacuna };
