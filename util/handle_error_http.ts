import { Response } from "express";

type handleError = (error: unknown, res: Response, msg?: string) => Response;

export const handleErrorHttp: handleError = (error, res, msg) => {
  console.log(error);
  return res.status(500).json({
    msg: msg ?? "Error inesperado",
  });
};
