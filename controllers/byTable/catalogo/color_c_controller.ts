import type { Request, Response } from "express";

import type { IColorC } from "../../../@types/interfaces";

import cColor from "../../../models/catalogo/color_c_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllColor = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, cColor);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
}

const getColor = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, cColor);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
}

const postColor = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, cColor, req.body as IColorC[]);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
}

const putColor = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, cColor);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
}

const deleteColor = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, cColor);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
}

export {
  getAllColor,
  getColor,
  postColor,
  putColor,
  deleteColor,
}
