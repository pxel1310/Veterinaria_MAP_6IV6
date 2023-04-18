import type { Request, Response } from "express";

import type { IEstadoExpedienteC } from "../../../@types/interfaces";

import cEstadoExpediente from "../../../models/catalogo/estado_expediente_c_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllEstadoExpediente = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, cEstadoExpediente);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getEstadoExpediente = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, cEstadoExpediente);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postEstadoExpediente = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(
      req,
      res,
      cEstadoExpediente,
      req.body as IEstadoExpedienteC[]
    );
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putEstadoExpediente = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, cEstadoExpediente);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteEstadoExpediente = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, cEstadoExpediente);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllEstadoExpediente,
  getEstadoExpediente,
  postEstadoExpediente,
  putEstadoExpediente,
  deleteEstadoExpediente,
};
