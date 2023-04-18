import type { Request, Response } from "express";

import type { IDuenoVeterinariaD } from "../../../@types/interfaces";

import dDuenoVeterinaria from "../../../models/detalle/dueno_veterinaria_d_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllDuenosVeterinarias = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, dDuenoVeterinaria);
  } catch (error) {
    handleErrorHttp(error, res);
  }
};

const getDuenoVeterinaria = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, dDuenoVeterinaria);
  } catch (error) {
    handleErrorHttp(error, res);
  }
};

const postDuenoVeterinaria = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(
      req,
      res,
      dDuenoVeterinaria,
      req.body as IDuenoVeterinariaD[]
    );
  } catch (error) {
    handleErrorHttp(error, res);
  }
};

const putDuenoVeterinaria = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, dDuenoVeterinaria);
  } catch (error) {
    handleErrorHttp(error, res);
  }
};

const deleteDuenoVeterinaria = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, dDuenoVeterinaria);
  } catch (error) {
    handleErrorHttp(error, res);
  }
};

export {
  getAllDuenosVeterinarias,
  getDuenoVeterinaria,
  postDuenoVeterinaria,
  putDuenoVeterinaria,
  deleteDuenoVeterinaria,
};
