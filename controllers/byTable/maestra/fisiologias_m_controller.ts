import type { Request, Response } from "express";

import type { IFisiologiaM } from "../../../@types/interfaces";

import mFisiologias from "../../../models/maestra/fisiologias_m_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllFisiologias = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, mFisiologias);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getFisiologias = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, mFisiologias);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postFisiologias = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(
      req,
      res,
      mFisiologias,
      req.body as IFisiologiaM[]
    );
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putFisiologias = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, mFisiologias);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteFisiologias = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, mFisiologias);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllFisiologias,
  getFisiologias,
  postFisiologias,
  putFisiologias,
  deleteFisiologias,
};
