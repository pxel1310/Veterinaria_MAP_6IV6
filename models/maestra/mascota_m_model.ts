import { DataTypes } from "sequelize";

import type { IMMascotaM } from "../../@types/models";
import dbConnection from "../../database/connection";

import dCliente from "../detalle/cliente_d_model";
import cRaza from "../catalogo/raza_c_model";
import cColor from "../catalogo/color_c_model";
import cSexo from "../catalogo/sexo_c_model";

const mMascota = dbConnection.define<IMMascotaM>(
  "mMascota",
  {
    id_mas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_cli: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: dCliente,
        key: "id_cli",
      },
    },
    nombre_mas: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fechaNac_mas: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    urlFoto_mas: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "https://i.imgur.com/0Z0Z0Z0.png",
    },
    id_raz: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: cRaza,
        key: "id_raz",
      },
    },
    id_sex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: cSexo,
        key: "id_sex",
      },
    },
    id_col: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: cColor,
        key: "id_col",
      },
    },
  },
  {
    tableName: "M_Mascota",
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
  }
);

cRaza.hasMany(mMascota, {
  foreignKey: "id_raz",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
mMascota.belongsTo(cRaza, {
  foreignKey: "id_raz",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

cRaza.hasMany(mMascota, {
  foreignKey: "id_raz",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mMascota.belongsTo(cRaza, {
  foreignKey: "id_raz",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

cSexo.hasMany(mMascota, {
  foreignKey: "id_sex",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mMascota.belongsTo(cSexo, {
  foreignKey: "id_sex",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

cColor.hasMany(mMascota, {
  foreignKey: "id_col",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

mMascota.belongsTo(cColor, {
  foreignKey: "id_col",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

export default mMascota;
