import type { Request, Response } from "express";

import type { ICategoriaC } from "../../../@types/interfaces";

import cCategoria from "../../../models/catalogo/categoria_c_model";

import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllCategoria = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, cCategoria);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getCategoria = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, cCategoria);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postCategoria = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(
      req,
      res,
      cCategoria,
      req.body as ICategoriaC[]
    );
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putCategoria = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, cCategoria);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteCategoria = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, cCategoria);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllCategoria,
  getCategoria,
  postCategoria,
  putCategoria,
  deleteCategoria,
};
