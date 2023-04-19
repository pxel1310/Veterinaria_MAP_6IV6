import { DataTypes } from "sequelize";

import type { IMVacunaC }  from "../../@types/models";
import dbConnection from "../../database/connection";

const cVacuna = dbConnection.define<IMVacunaC>(
  "cVacuna",
  {
    id_vac: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre_vac: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descripcion_vac: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Sin descripción",
    },
  },
  {
    tableName: "C_Vacuna",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

export default cVacuna;
