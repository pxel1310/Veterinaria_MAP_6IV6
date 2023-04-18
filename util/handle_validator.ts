import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const handleValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error: any) {
    return res.status(400).json({
      errors: error.array(),
    });
  }
};
