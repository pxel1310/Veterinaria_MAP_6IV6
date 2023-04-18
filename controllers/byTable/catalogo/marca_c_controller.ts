import type { Request, Response } from "express";

import type { IMarcaC } from "../../../@types/interfaces";

import cMarca from "../../../models/catalogo/marca_c_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllMarca = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, cMarca);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getMarca = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, cMarca);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postMarca = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, cMarca, req.body as IMarcaC[]);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putMarca = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, cMarca);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteMarca = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, cMarca);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export { getAllMarca, getMarca, postMarca, putMarca, deleteMarca };
