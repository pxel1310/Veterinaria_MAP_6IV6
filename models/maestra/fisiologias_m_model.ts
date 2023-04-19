import { DataTypes } from "sequelize";

import type { IMFisiologiasM } from "../../@types/models";
import dbConnection from "../../database/connection";

import mMascota from "../maestra/mascota_m_model";

const mFisiologias = dbConnection.define<IMFisiologiasM>(
  "mFisiologias",
  {
    id_fis: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pulso_fis: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    altura_fis: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    dieta_fis: {
      type: DataTypes.STRING(2048),
      allowNull: false,
    },
    tipoAlimentacion_fis: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    cantidadAlimentacion_fis: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    temperatura_fis: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    frecuenciaCardiaca_fis: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    frecuenciaRespiratoria_fis: {
      type: DataTypes.FLOAT,
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
  },
  {
    tableName: "M_fisiologias",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

mMascota.hasMany(mFisiologias, {
  foreignKey: "id_mas",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mFisiologias.belongsTo(mMascota, {
  foreignKey: "id_mas",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

export default mFisiologias;
