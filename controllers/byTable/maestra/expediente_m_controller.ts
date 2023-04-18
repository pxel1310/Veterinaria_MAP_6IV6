import type { Request, Response } from "express";

import type { IExpedienteM } from "../../../@types/interfaces";

import mExpediente from "../../../models/maestra/expediente_m_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllExpediente = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, mExpediente);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getExpediente = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, mExpediente);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postExpediente = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(
      req,
      res,
      mExpediente,
      req.body as IExpedienteM[]
    );
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putExpediente = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, mExpediente);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteExpediente = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, mExpediente);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllExpediente,
  getExpediente,
  postExpediente,
  putExpediente,
  deleteExpediente,
};
