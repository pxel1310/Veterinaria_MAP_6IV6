import type { Request, Response } from "express";

import type { IRolC } from "../../../@types/interfaces";

import cRol from "../../../models/catalogo/rol_c_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllRol = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, cRol);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getRol = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, cRol);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postRol = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, cRol, req.body as IRolC[]);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putRol = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, cRol);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteRol = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, cRol);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export { getAllRol, getRol, postRol, putRol, deleteRol };
