import { DataTypes } from "sequelize";

import type { IMExpedienteM } from "../../@types/models";
import dbConnection from "../../database/connection";

import mMascota from "../maestra/mascota_m_model";
import cEstadoExpediente from "../catalogo/estado_expediente_c_model";

const mExpediente = dbConnection.define<IMExpedienteM>(
  "mExpediente",
  {
    id_exp: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    motivo_exp: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    antecedentes_exp: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    diagnostico_exp: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    receta_exp: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fecha_exp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_mas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: mMascota,
        key: "id_mas",
      },
    },
    id_estexp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: cEstadoExpediente,
        key: "id_estexp",
      },
    },
  },
  {
    tableName: "M_Expediente",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

mMascota.hasMany(mExpediente, {
  foreignKey: "id_mas",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mExpediente.belongsTo(mMascota, {
  foreignKey: "id_mas",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

cEstadoExpediente.hasMany(mExpediente, {
  foreignKey: "id_estexp",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mExpediente.belongsTo(cEstadoExpediente, {
  foreignKey: "id_estexp",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

export default mExpediente;
