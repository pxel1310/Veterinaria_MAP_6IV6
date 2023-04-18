import { DataTypes } from "sequelize";

import type { IMRazaC } from "../../@types/models";
import dbConnection from "../../database/connection";

import cEspecie from "../catalogo/especie_c_model";

const cRaza = dbConnection.define<IMRazaC>(
  "cRaza",
  {
    id_raz: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_raz: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descripcion_raz: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Sin descripción",
    },
    id_esp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Foreign key
      references: {
        model: cEspecie,
        key: "id_esp",
      },
    },
  },
  {
    tableName: "C_Raza",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

cEspecie.hasMany(cRaza, {
  foreignKey: "id_esp",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
cRaza.belongsTo(cEspecie, {
  foreignKey: "id_esp",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

export default cRaza;
