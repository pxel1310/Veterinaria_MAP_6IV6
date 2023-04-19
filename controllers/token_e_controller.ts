import type { Request, Response } from "express";
import { Model, Op } from "sequelize";
import bcryptjs from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

import type { IUsersAccessE } from "../@types/interfaces";
import eUsersAccess from "../models/extra/users_access_e_model";
import { generarJWT } from "../helpers";

interface IUserWithoutPassword {
  id: string;
  correo: string;
  boleta: number;
  api_token: string;
}

type IDeletePasswordAndMinify = (
  user: Model<IUsersAccessE>
) => IUserWithoutPassword;

const deletePasswordAndMinify: IDeletePasswordAndMinify = ({
  dataValues: { id_useacc, correo_useacc, boleta_useacc, api_token_useacc },
}) => {
  return {
    id: id_useacc,
    correo: correo_useacc,
    boleta: boleta_useacc,
    api_token: api_token_useacc,
  };
};

const getAllUsersAccess = async (req: Request, res: Response) => {
  try {
    const [total, usersAccess] = await Promise.all([
      eUsersAccess.count(),
      eUsersAccess.findAll(),
    ]);

    const usersWithoutPassword = usersAccess.map(deletePasswordAndMinify);

    return res.status(200).json({
      total,
      usersAccess: usersWithoutPassword,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      msg: "Error inesperado",
    });
  }
};

const getUsersAccess = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usersAccess = await eUsersAccess.findByPk(id);

    if (!usersAccess) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    return res.status(200).json({
      user: deletePasswordAndMinify(usersAccess),
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      msg: "Error inesperado",
    });
  }
};

const postUsersAccess = async (req: Request, res: Response) => {
  const { correo, password, boleta } = req.body as {
    correo: string;
    password: string;
    boleta: number;
  };

  try {
    const userFind = await eUsersAccess.findOne({
      where: {
        [Op.or]: [{ correo_useacc: correo }, { boleta_useacc: boleta }],
      },
    });

    if (userFind) {
      return res.status(400).json({
        msg: "El correo ya existe",
      });
    }
    const salt = bcryptjs.genSaltSync();
    const passwordBC = bcryptjs.hashSync(password, salt);

    const usersAccess = await eUsersAccess.create({
      correo_useacc: correo,
      boleta_useacc: boleta,
      password_useacc: passwordBC,
      id_useacc: uuidv4().toString(),
      api_token_useacc: "",
    });

    return res.status(201).json({
      user: deletePasswordAndMinify(usersAccess),
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      msg: "Error inesperado",
    });
  }
};

const deleteUsersAccess = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usersAccess = await eUsersAccess.findByPk(id);

    if (!usersAccess) {
      return res.status(404).json({
        msg: "No existe el registro",
      });
    }

    await usersAccess.destroy();

    return res.status(200).json({
      msg: "Registro eliminado",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      msg: "Error inesperado",
    });
  }
};

const renovarToken = async (req: Request, res: Response) => {
  const { user } = req.body;

  try {
    if (!user.id_useacc) {
      return res.status(404).json({
        msg: "No existe el usuario",
      });
    }
    const token = await generarJWT(user.id_useacc);

    await user.update({ api_token_useacc: String(token) });

    return res.status(200).json({
      user: deletePasswordAndMinify(user),
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      msg: "Error inesperado al renovar el token",
    });
  }
};

const obtenerToken = async (req: Request, res: Response) => {
  const { correo, password } = req.body as { correo: string; password: string };

  try {
    const user = await eUsersAccess.findOne({
      where: {
        correo_useacc: correo,
      },
    });

    if (!user) {
      return res.status(404).json({
        msg: "Correo no existe",
      });
    }

    const validPassword = bcryptjs.compareSync(password, user.password_useacc);

    if (!validPassword) {
      return res.status(400).json({
        msg: "Contraseña no válida",
      });
    }

    const token = await generarJWT(user.id_useacc);

    await user.update({ api_token_useacc: String(token) });

    return res.status(200).json({
      user: deletePasswordAndMinify(user),
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      msg: "Error inesperado al obtener el token",
    });
  }
};

export {
  getAllUsersAccess,
  getUsersAccess,
  postUsersAccess,
  deleteUsersAccess,
  // ----------------
  renovarToken,
  obtenerToken,
};
