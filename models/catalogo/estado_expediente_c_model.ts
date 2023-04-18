import { DataTypes } from "sequelize";

import type { IMEstadoExpedienteC } from "../../@types/models";
import dbConnection from "../../database/connection";

const cEstadoExpediente = dbConnection.define<IMEstadoExpedienteC>(
  "cEstadoExpediente",
  {
    id_estexp: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_estexp: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descripcion_estexp: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Sin descripción",
    },
  },
  {
    tableName: "C_EstadoExpediente",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

export default cEstadoExpediente;
