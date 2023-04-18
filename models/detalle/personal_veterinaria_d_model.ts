import { DataTypes } from "sequelize";

import type { IMPersonalVeterinariaD } from "../../@types/models";
import dbConnection from "../../database/connection";

import mUsuario from "../maestra/usuario_m_model";
import mVeterinaria from "../maestra/veterinaria_m_model";

const dPersonalVeterinaria = dbConnection.define<IMPersonalVeterinariaD>(
  "dPersonalVeterinaria",
  {
    id_pervet: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: mUsuario,
        key: "id_usu",
      },
    },
    nombre_pervet: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    id_vet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: mVeterinaria,
        key: "id_vet",
      },
    },
  },
  {
    tableName: "D_PersonalVeterinaria",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

mUsuario.hasOne(dPersonalVeterinaria, {
  foreignKey: "id_usu",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

dPersonalVeterinaria.belongsTo(mUsuario, {
  foreignKey: "id_usu",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mUsuario.hasMany(dPersonalVeterinaria, {
  foreignKey: "id_usu",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

dPersonalVeterinaria.belongsTo(mVeterinaria, {
  foreignKey: "id_vet",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

export default dPersonalVeterinaria;
