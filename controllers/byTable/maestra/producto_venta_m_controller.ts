import type { Request, Response } from "express";

import type { IProductoVentaM } from "../../../@types/interfaces";

import mProductoVenta from "../../../models/maestra/producto_venta_m_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllProductoVenta = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, mProductoVenta);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getProductoVenta = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, mProductoVenta);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postProductoVenta = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(
      req,
      res,
      mProductoVenta,
      req.body as IProductoVentaM[]
    );
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putProductoVenta = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, mProductoVenta);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteProductoVenta = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, mProductoVenta);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllProductoVenta,
  getProductoVenta,
  postProductoVenta,
  putProductoVenta,
  deleteProductoVenta,
};
