import { DataTypes } from "sequelize";

import type { IMAnimalProductoC } from "../../@types/models";
import dbConnection from "../../database/connection";

const cAnimalProducto = dbConnection.define<IMAnimalProductoC>(
  "cAnimalProducto",
  {
    id_anipro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_anipro: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    estado_anipro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: "C_AnimalProducto",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

export default cAnimalProducto;
