import { DataTypes } from "sequelize";

import type { IMGastoFijoM } from "../../@types/models";
import dbConnection from "../../database/connection";

import cServicio from "../catalogo/servicio_c_model";
import dPeriodo from "../detalle/periodo_d_model";

const mGastoFijo = dbConnection.define<IMGastoFijoM>(
  "mGastoFijo",
  {
    id_gasfij: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    fecha_gasfij: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    monto_gasfij: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    id_ser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: cServicio,
        key: "id_ser",
      },
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
    tableName: "M_GastoFijo",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

dPeriodo.hasMany(mGastoFijo, {
  foreignKey: "id_per",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mGastoFijo.belongsTo(dPeriodo, {
  foreignKey: "id_per",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

cServicio.hasMany(mGastoFijo, {
  foreignKey: "id_ser",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mGastoFijo.belongsTo(cServicio, {
  foreignKey: "id_ser",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

export default mGastoFijo;
