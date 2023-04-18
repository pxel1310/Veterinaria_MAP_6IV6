import type { Request, Response } from "express";

import type { IServicioC } from "../../../@types/interfaces";

import cServicio from "../../../models/catalogo/servicio_c_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllServicio = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, cServicio);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getServicio = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, cServicio);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postServicio = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, cServicio, req.body as IServicioC[]);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putServicio = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, cServicio);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteServicio = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, cServicio);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllServicio,
  getServicio,
  postServicio,
  putServicio,
  deleteServicio,
};
