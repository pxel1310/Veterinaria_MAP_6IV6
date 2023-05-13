import { DataTypes } from 'sequelize'

import type { IMProductoM } from '../../@types/models'
import dbConnection from '../../database/connection'

import cCategoria from '../catalogo/categoria_c_model'
import cMarca from '../catalogo/marca_c_model'
import cAnimalProducto from '../catalogo/animal_producto_c_model'
import mVeterinaria from './veterinaria_m_model'

const mProducto = dbConnection.define<IMProductoM>(
  'mProducto',
  {
    id_pro: {
      type: DataTypes.STRING(28),
      primaryKey: true,
    },
    nombre_pro: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    stockId_pro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    precioVenta_pro: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    estado_pro: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
    id_cat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: cCategoria,
        key: 'id_cat',
      },
    },
    id_mar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: cMarca,
        key: 'id_mar',
      },
    },
    id_anipro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: cAnimalProducto,
        key: 'id_anipro',
      },
    },
    id_vet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: mVeterinaria,
        key: 'id_vet',
      },
    },
  },
  {
    tableName: 'M_Producto',
    timestamps: true,
    createdAt: 'create_at',
    updatedAt: 'update_at',
  }
)

cCategoria.hasMany(mProducto, {
  foreignKey: 'id_cat',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
})

mProducto.belongsTo(cCategoria, {
  foreignKey: 'id_cat',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
})

cMarca.hasMany(mProducto, {
  foreignKey: 'id_mar',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
})

mProducto.belongsTo(cMarca, {
  foreignKey: 'id_mar',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
})

cAnimalProducto.hasMany(mProducto, {
  foreignKey: 'id_anipro',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
})

mProducto.belongsTo(cAnimalProducto, {
  foreignKey: 'id_anipro',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
})

mVeterinaria.hasMany(mProducto, {
  foreignKey: 'id_vet',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
})

mProducto.belongsTo(mVeterinaria, {
  foreignKey: 'id_vet',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
})

export default mProducto
