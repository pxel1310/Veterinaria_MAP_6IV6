import { Router } from "express";
import { check } from "express-validator";

import { validarApiToken, validarCampos } from "../middlewares";

import {
  getAllUsersAccess,
  getUsersAccess,
  postUsersAccess,
  deleteUsersAccess,
  renovarToken,
  obtenerToken,
} from "../controllers";

const tokenRouter = Router();

tokenRouter.get("/", validarApiToken, renovarToken);

tokenRouter.post(
  "/",
  [
    check("correo", "El correo es obligatorio").not().isEmpty(),
    check("correo", "El correo no es válido").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  obtenerToken
);

tokenRouter.get("/users", getAllUsersAccess);

tokenRouter.get(
  "/users/:id",
  [
    check("id", "El id es obligatorio").not().isEmpty(),
    check("id", "El id no es válido").isUUID(),
    validarCampos,
  ],
  getUsersAccess
);

tokenRouter.post(
  "/users",
  [
    check("correo", "El correo es obligatorio").not().isEmpty(),
    check("correo", "El correo no es válido").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    check("password", "La contraseña no tiene la longitud correcta").isLength({
      min: 6,
    }),
    check("boleta", "La boleta es obligatoria").not().isEmpty(),
    check("boleta", "La boleta no es válida").isNumeric(),
    check("boleta", "La boleta no tiene la longitud correcta").isLength({
      min: 10,
      max: 10,
    }),
    validarCampos,
  ],
  postUsersAccess
);

tokenRouter.delete(
  "/users/:id",
  [
    check("id", "El id es obligatorio").not().isEmpty(),
    check("id", "El id no es válido").isUUID(),
    validarCampos,
  ],
  deleteUsersAccess
);

export default tokenRouter;
