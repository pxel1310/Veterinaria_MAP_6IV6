import type { Request, Response } from "express";

import type { IVeterinariaM } from "../../../@types/interfaces";

import dVenta from "../../../models/detalle/venta_d_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllVenta = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, dVenta);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getVenta = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, dVenta);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postVenta = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, dVenta, req.body as IVeterinariaM[]);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putVenta = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, dVenta);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteVenta = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, dVenta);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export { getAllVenta, getVenta, postVenta, putVenta, deleteVenta };
