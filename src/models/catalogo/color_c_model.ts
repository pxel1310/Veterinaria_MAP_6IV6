import { DataTypes } from 'sequelize'

import type { IMColorC } from '../../@types/models'
import dbConnection from '../../database/connection'

const cColor = dbConnection.define<IMColorC>(
  'cColor',
  {
    id_col: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre_col: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descripcion_col: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: 'Sin descripción',
    },
  },
  {
    tableName: 'C_Color',
    timestamps: true,
    createdAt: 'create_at',
    updatedAt: 'update_at',
  }
)

export default cColor
