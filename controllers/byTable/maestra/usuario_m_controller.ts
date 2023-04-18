import type { Request, Response } from "express";

import type { IUsuarioM } from "../../../@types/interfaces";

import mUsuario from "../../../models/maestra/usuario_m_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllUsuario = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, mUsuario);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getUsuario = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, mUsuario);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postUsuario = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, mUsuario, req.body as IUsuarioM[]);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putUsuario = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, mUsuario);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteUsuario = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, mUsuario);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export { getAllUsuario, getUsuario, postUsuario, putUsuario, deleteUsuario };
