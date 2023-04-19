import { DataTypes } from "sequelize";

import type { IMProductoVentaM } from "../../@types/models";
import dbConnection from "../../database/connection";

import dVenta from "../detalle/venta_d_model";
import mProducto from "./producto_m_model";

const mProductoVenta = dbConnection.define<IMProductoVentaM>(
  "mProductoVenta",
  {
    id_proven: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cantidad_proven: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    montoSubtotal_proven: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    montoTotal_proven: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    id_ven: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: dVenta,
        key: "id_ven",
      },
    },
    id_pro: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: mProducto,
        key: "id_pro",
      },
    },
  },
  {
    tableName: "M_ProductoVenta",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

dVenta.hasMany(mProductoVenta, {
  foreignKey: "id_ven",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mProductoVenta.belongsTo(dVenta, {
  foreignKey: "id_ven",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mProducto.hasMany(mProductoVenta, {
  foreignKey: "id_pro",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mProductoVenta.belongsTo(mProducto, {
  foreignKey: "id_pro",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

export default mProductoVenta;
