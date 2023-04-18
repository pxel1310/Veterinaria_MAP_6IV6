import { DataTypes } from "sequelize";

import type { IMRolC } from "../../@types/models";
import dbConnection from "../../database/connection";

const cRol = dbConnection.define<IMRolC>(
  "cRol",
  {
    id_rol: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_rol: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descripcion_rol: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Sin descripción",
    },
  },
  {
    tableName: "C_Rol",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

export default cRol;
