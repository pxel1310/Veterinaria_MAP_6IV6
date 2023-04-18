import type { Request, Response } from "express";

import type { IAnimalProductoC } from "../../../@types/interfaces";

import cAnimalProducto from "../../../models/catalogo/animal_producto_c_model";
import {
  handleDeleteRequest,
  handleErrorHttp,
  handleGetAllRequest,
  handleGetRequest,
  handlePostAllRequest,
  handlePutRequest,
} from "../../../util";

const getAllAnimalProducto = async (req: Request, res: Response) => {
  try {
    return handleGetAllRequest(req, res, cAnimalProducto);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const getAnimalProducto = async (req: Request, res: Response) => {
  try {
    return handleGetRequest(req, res, cAnimalProducto);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const postAnimalProducto = async (req: Request, res: Response) => {
  try {
    return handlePostAllRequest(
      req,
      res,
      cAnimalProducto,
      req.body as IAnimalProductoC[]
    );
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const putAnimalProducto = async (req: Request, res: Response) => {
  try {
    return handlePutRequest(req, res, cAnimalProducto);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

const deleteAnimalProducto = async (req: Request, res: Response) => {
  try {
    return handleDeleteRequest(req, res, cAnimalProducto);
  } catch (error) {
    return handleErrorHttp(error, res);
  }
};

export {
  getAllAnimalProducto,
  getAnimalProducto,
  postAnimalProducto,
  putAnimalProducto,
  deleteAnimalProducto,
};
