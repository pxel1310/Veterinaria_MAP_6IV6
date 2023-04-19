import { DataTypes } from "sequelize";

import type { IMLoteM } from "../../@types/models";
import dbConnection from "../../database/connection";

import cProveedor from "../catalogo/proveedor_c_model";
import mProducto from "./producto_m_model";
import dPeriodo from "../detalle/periodo_d_model";

const mLote = dbConnection.define<IMLoteM>(
  "mLote",
  {
    id_lot: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cantidadProducto_lot: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fechaEntrada_lot: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fechaCaducidad_lot: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    precioUnitario_lot: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    montoTotal_lot: {
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
    id_prov: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: cProveedor,
        key: "id_prov",
      },
    },
    id_pro: {
      type: DataTypes.STRING(28),
      allowNull: false,
      references: {
        model: mProducto,
        key: "id_pro",
      },
    },
  },
  {
    tableName: "M_Lote",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

cProveedor.hasMany(mLote, {
  foreignKey: "id_prov",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mLote.belongsTo(cProveedor, {
  foreignKey: "id_prov",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mProducto.hasMany(mLote, {
  foreignKey: "id_pro",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mLote.belongsTo(mProducto, {
  foreignKey: "id_pro",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

dPeriodo.hasMany(mLote, {
  foreignKey: "id_per",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mLote.belongsTo(dPeriodo, {
  foreignKey: "id_per",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

export default mLote;
