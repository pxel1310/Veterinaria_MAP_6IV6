import { DataTypes } from "sequelize";

import type { IMExpedienteEnfermedadR } from "../../@types/models";
import dbConnection from "../../database/connection";

import mExpediente from "../maestra/expediente_m_model";
import cEnfermedad from "../catalogo/enfermedad_c_model";

const rExpedienteEnfermedad = dbConnection.define<IMExpedienteEnfermedadR>(
  "rExpedienteEnfermedad",
  {
    id_expenf: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: mExpediente,
        key: "id_exp",
      },
    },
    id_enf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: cEnfermedad,
        key: "id_enf",
      },
    },
  },
  {
    tableName: "R_ExpedienteEnfermedad",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

mExpediente.hasMany(rExpedienteEnfermedad, {
  foreignKey: "id_exp",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

rExpedienteEnfermedad.belongsTo(mExpediente, {
  foreignKey: "id_exp",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

cEnfermedad.hasMany(rExpedienteEnfermedad, {
  foreignKey: "id_enf",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

rExpedienteEnfermedad.belongsTo(cEnfermedad, {
  foreignKey: "id_enf",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

export default rExpedienteEnfermedad;
