import type { Request, Response } from "express";

import type { IVeterinariaM } from "../../../@types/interfaces";

import mVeterinaria from "../../../models/maestra/veterinaria_m_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllVeterinaria = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, mVeterinaria);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getVeterinaria = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, mVeterinaria);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postVeterinaria = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(
      req,
      res,
      mVeterinaria,
      req.body as IVeterinariaM[]
    );
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putVeterinaria = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, mVeterinaria);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteVeterinaria = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, mVeterinaria);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllVeterinaria,
  getVeterinaria,
  postVeterinaria,
  putVeterinaria,
  deleteVeterinaria,
};
