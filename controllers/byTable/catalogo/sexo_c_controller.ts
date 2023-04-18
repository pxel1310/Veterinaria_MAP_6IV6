import type { Request, Response } from "express";

import type { ISexoC } from "../../../@types/interfaces";

import cSexo from "../../../models/catalogo/sexo_c_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllSexo = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, cSexo);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getSexo = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, cSexo);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postSexo = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, cSexo, req.body as ISexoC[]);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putSexo = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, cSexo);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteSexo = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, cSexo);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export { getAllSexo, getSexo, postSexo, putSexo, deleteSexo };
