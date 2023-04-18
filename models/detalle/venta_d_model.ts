import { DataTypes } from "sequelize";

import type { IMVentaD } from "../../@types/models";
import dbConnection from "../../database/connection";

import dPeriodo from "./periodo_d_model";

const dVenta = dbConnection.define<IMVentaD>(
  "dVenta",
  {
    id_ven: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    fecha_ven: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora_ven: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    montoSubtotal_ven: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    montoTotal_ven: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    id_per: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: dPeriodo,
        key: "id_per",
      },
    },
  },
  {
    tableName: "D_Venta",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

dPeriodo.hasMany(dVenta, {
  foreignKey: "id_per",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

dVenta.belongsTo(dPeriodo, {
  foreignKey: "id_per",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

export default dVenta;
