import type { Request, Response } from "express";

import type { IExpedienteVacunaR } from "../../../@types/interfaces";

import rExpedienteVacuna from "../../../models/relacional/expediente_vacuna_r_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllExpedienteVacuna = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, rExpedienteVacuna);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getExpedienteVacuna = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, rExpedienteVacuna);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postExpedienteVacuna = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(
      req,
      res,
      rExpedienteVacuna,
      req.body as IExpedienteVacunaR[]
    );
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putExpedienteVacuna = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, rExpedienteVacuna);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteExpedienteVacuna = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, rExpedienteVacuna);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllExpedienteVacuna,
  getExpedienteVacuna,
  postExpedienteVacuna,
  putExpedienteVacuna,
  deleteExpedienteVacuna,
};
