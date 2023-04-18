import { DataTypes } from "sequelize";

import type { IMVeterinariaM } from "../../@types/models";
import dbConnection from "../../database/connection";

const mVeterinaria = dbConnection.define<IMVeterinariaM>(
  "mVeterinaria",
  {
    id_vet: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_vet: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    direccion_vet: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefono_vet: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: "0000000000",
    },
    correo_vet: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "M_Veterinaria",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

export default mVeterinaria;
