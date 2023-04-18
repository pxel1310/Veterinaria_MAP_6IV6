import type { Request, Response } from "express";

import type { IProductoM } from "../../../@types/interfaces";

import mProducto from "../../../models/maestra/producto_m_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllProducto = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, mProducto);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getProducto = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, mProducto);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postProducto = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, mProducto, req.body as IProductoM[]);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putProducto = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, mProducto);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteProducto = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, mProducto);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllProducto,
  getProducto,
  postProducto,
  putProducto,
  deleteProducto,
};
