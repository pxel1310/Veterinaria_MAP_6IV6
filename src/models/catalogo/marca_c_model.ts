import { DataTypes } from 'sequelize'

import type { IMMarcaC } from '../../@types/models'
import dbConnection from '../../database/connection'

const cMarca = dbConnection.define<IMMarcaC>(
  'cMarca',
  {
    id_mar: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre_mar: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    estado_mar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: 'C_Marca',
    timestamps: true,
    createdAt: 'create_at',
    updatedAt: 'update_at',
  }
)

export default cMarca
