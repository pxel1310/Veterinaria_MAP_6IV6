import type { Request, Response } from "express";

import type { IEnfermedadC } from "../../../@types/interfaces";

import cEnfermedad from "../../../models/catalogo/enfermedad_c_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllEnfermedad = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, cEnfermedad);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getEnfermedad = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, cEnfermedad);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postEnfermedad = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(
      req,
      res,
      cEnfermedad,
      req.body as IEnfermedadC[]
    );
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putEnfermedad = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, cEnfermedad);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteEnfermedad = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, cEnfermedad);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllEnfermedad,
  getEnfermedad,
  postEnfermedad,
  putEnfermedad,
  deleteEnfermedad,
};
