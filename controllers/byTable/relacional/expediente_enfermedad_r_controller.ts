import type { Request, Response } from "express";

import type { IExpedienteEnfermedadR } from "../../../@types/interfaces";

import rExpedienteEnfermedad from "../../../models/relacional/expediente_enfermedad_r_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllExpedienteEnfermedad = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, rExpedienteEnfermedad);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getExpedienteEnfermedad = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, rExpedienteEnfermedad);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postExpedienteEnfermedad = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(
      req,
      res,
      rExpedienteEnfermedad,
      req.body as IExpedienteEnfermedadR[]
    );
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putExpedienteEnfermedad = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, rExpedienteEnfermedad);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteExpedienteEnfermedad = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, rExpedienteEnfermedad);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllExpedienteEnfermedad,
  getExpedienteEnfermedad,
  postExpedienteEnfermedad,
  putExpedienteEnfermedad,
  deleteExpedienteEnfermedad,
};
