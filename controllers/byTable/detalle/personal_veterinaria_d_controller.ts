import type { Request, Response } from "express";

import type { IPersonalVeterinariaD } from "../../../@types/interfaces";

import dPersonalVeterinaria from "../../../models/detalle/personal_veterinaria_d_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllPersonalVeterinaria = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, dPersonalVeterinaria);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getPersonalVeterinaria = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, dPersonalVeterinaria);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postPersonalVeterinaria = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(
      req,
      res,
      dPersonalVeterinaria,
      req.body as IPersonalVeterinariaD[]
    );
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putPersonalVeterinaria = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, dPersonalVeterinaria);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deletePersonalVeterinaria = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, dPersonalVeterinaria);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllPersonalVeterinaria,
  getPersonalVeterinaria,
  postPersonalVeterinaria,
  putPersonalVeterinaria,
  deletePersonalVeterinaria,
};
