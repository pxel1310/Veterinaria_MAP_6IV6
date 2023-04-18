import { DataTypes } from "sequelize";

import type { IMPeriodoD } from "../../@types/models";
import dbConnection from "../../database/connection";

const dPeriodo = dbConnection.define<IMPeriodoD>(
  "dPeriodo",
  {
    id_per: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    fechaInicio_per: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fechaTermino_per: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    agno_per: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    balance_per: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "D_Periodo",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

export default dPeriodo;
