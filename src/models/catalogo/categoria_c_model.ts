import { DataTypes } from 'sequelize'

import type { IMCategoriaC } from '../../@types/models'
import dbConnection from '../../database/connection'

const cCategoria = dbConnection.define<IMCategoriaC>(
  'cCategoria',
  {
    id_cat: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre_cat: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    estado_cat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: 'C_Categoria',
    timestamps: true,
    createdAt: 'create_at',
    updatedAt: 'update_at',
  }
)

export default cCategoria
