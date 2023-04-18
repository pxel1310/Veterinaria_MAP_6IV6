import type { Request, Response } from "express";

import type { IMascotaM } from "../../../@types/interfaces";

import mMascota from "../../../models/maestra/mascota_m_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllMascota = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, mMascota);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getMascota = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, mMascota);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postMascota = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, mMascota, req.body as IMascotaM[]);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putMascota = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, mMascota);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteMascota = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, mMascota);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export { getAllMascota, getMascota, postMascota, putMascota, deleteMascota };
