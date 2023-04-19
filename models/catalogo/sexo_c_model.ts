import { DataTypes } from "sequelize";

import type { IMSexoC }  from "../../@types/models";
import dbConnection from "../../database/connection";

const cSexo = dbConnection.define<IMSexoC>(
  "cSexo",
  {
    id_sex: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre_sex: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descripcion_sex: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "Sin descripción",
    },
  },
  {
    tableName: "C_Sexo",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

export default cSexo;
