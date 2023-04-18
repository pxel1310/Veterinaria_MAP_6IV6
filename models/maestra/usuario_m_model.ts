import { DataTypes } from "sequelize";

import type { IMUsuarioM } from "../../@types/models";
import dbConnection from "../../database/connection";

import cRol from "../catalogo/rol_c_model";

const mUsuario = dbConnection.define<IMUsuarioM>(
  "mUsuario",
  {
    id_usu: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    correo_usu: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    contrasena_usu: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: cRol,
        key: "id_rol",
      },
    },
  },
  {
    tableName: "M_Usuario",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

cRol.hasMany(mUsuario, {
  foreignKey: "id_rol",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
mUsuario.belongsTo(cRol, {
  foreignKey: "id_rol",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

export default mUsuario;
