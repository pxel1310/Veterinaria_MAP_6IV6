import { DataTypes } from "sequelize";

import type { IMExpedienteVacunaR } from "../../@types/models";
import dbConnection from "../../database/connection";

import mExpediente from "../maestra/expediente_m_model";
import cVacuna from "../catalogo/vacuna_c_model";

const rExpedienteVacuna = dbConnection.define<IMExpedienteVacunaR>(
  "rExpedienteVacuna",
  {
    id_expvac: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: mExpediente,
        key: "id_exp",
      },
    },
    id_vac: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: cVacuna,
        key: "id_vac",
      },
    },
  },
  {
    tableName: "R_ExpedienteVacuna",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

mExpediente.hasMany(rExpedienteVacuna, {
  foreignKey: "id_exp",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

rExpedienteVacuna.belongsTo(mExpediente, {
  foreignKey: "id_exp",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

cVacuna.hasMany(rExpedienteVacuna, {
  foreignKey: "id_vac",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

rExpedienteVacuna.belongsTo(cVacuna, {
  foreignKey: "id_vac",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

export default rExpedienteVacuna;
