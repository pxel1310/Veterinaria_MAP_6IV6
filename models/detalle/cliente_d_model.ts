import { DataTypes } from "sequelize";

import type { IMClienteD } from "../../@types/models";
import dbConnection from "../../database/connection";

import mUsuario from "../maestra/usuario_m_model";
import mVeterinaria from "../maestra/veterinaria_m_model";

const dCliente = dbConnection.define<IMClienteD>(
  "dCliente",
  {
    id_cli: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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
    nombre_cli: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    direccion_cli: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefono_cli: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: "0000000000",
    },
    correo_cli: {
      type: DataTypes.STRING(45),
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
    tableName: "D_Cliente",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);
mUsuario.hasOne(dCliente, {
  foreignKey: "id_usu",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

dCliente.belongsTo(mUsuario, {
  foreignKey: "id_usu",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mVeterinaria.hasMany(dCliente, {
  foreignKey: "id_vet",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

dCliente.belongsTo(mVeterinaria, {
  foreignKey: "id_vet",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

export default dCliente;
