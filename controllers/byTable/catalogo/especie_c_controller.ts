import type { Request, Response } from "express";

import type { IEspecieC } from "../../../@types/interfaces";

import cEspecie from "../../../models/catalogo/especie_c_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllEspecie = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, cEspecie);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getEspecie = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, cEspecie);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postEspecie = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, cEspecie, req.body as IEspecieC[]);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putEspecie = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, cEspecie);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteEspecie = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, cEspecie);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export { getAllEspecie, getEspecie, postEspecie, putEspecie, deleteEspecie };
