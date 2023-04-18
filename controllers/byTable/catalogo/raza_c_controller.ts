import type { Request, Response } from "express";

import type { IRazaC } from "../../../@types/interfaces";

import cRaza from "../../../models/catalogo/raza_c_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllRaza = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, cRaza);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getRaza = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, cRaza);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postRaza = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, cRaza, req.body as IRazaC[]);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putRaza = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, cRaza);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteRaza = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, cRaza);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export { getAllRaza, getRaza, postRaza, putRaza, deleteRaza };
