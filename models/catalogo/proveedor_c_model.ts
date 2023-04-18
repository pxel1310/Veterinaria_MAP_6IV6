import { DataTypes } from "sequelize";

import type { IMProveedorC } from "../../@types/models";
import dbConnection from "../../database/connection";

const cProveedor = dbConnection.define<IMProveedorC>(
  "cProveedor",
  {
    id_prov: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_prov: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    tel_prov: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: "0000000000",
    },
  },
  {
    tableName: "C_Proveedor",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

export default cProveedor;
