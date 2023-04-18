import type { Request, Response } from "express";

import type { IClienteD } from "../../../@types/interfaces";

import dCliente from "../../../models/detalle/cliente_d_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllClientes = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, dCliente);
  } catch (error) {
    handleErrorHttp(error, res);
  }
};

const getCliente = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, dCliente);
  } catch (error) {
    handleErrorHttp(error, res);
  }
};

const postCliente = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(req, res, dCliente, req.body as IClienteD[]);
  } catch (error) {
    handleErrorHttp(error, res);
  }
};

const putCliente = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, dCliente);
  } catch (error) {
    handleErrorHttp(error, res);
  }
};

const deleteCliente = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, dCliente);
  } catch (error) {
    handleErrorHttp(error, res);
  }
};

export { getAllClientes, getCliente, postCliente, putCliente, deleteCliente };
