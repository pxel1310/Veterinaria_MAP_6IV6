import type { Request, Response } from "express";

import type { IProveedorC } from "../../../@types/interfaces";

import cProveedor from "../../../models/catalogo/proveedor_c_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllProveedor = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, cProveedor);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getProveedor = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, cProveedor);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postProveedor = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(
      req,
      res,
      cProveedor,
      req.body as IProveedorC[]
    );
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putProveedor = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, cProveedor);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteProveedor = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, cProveedor);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllProveedor,
  getProveedor,
  postProveedor,
  putProveedor,
  deleteProveedor,
};
