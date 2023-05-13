import { DataTypes } from 'sequelize'

import type { IMEspecieC } from '../../@types/models'
import dbConnection from '../../database/connection'

const cEspecie = dbConnection.define<IMEspecieC>(
  'cEspecie',
  {
    id_esp: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre_esp: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descripcion_esp: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'Sin descripción',
    },
  },
  {
    tableName: 'C_Especie',
    timestamps: true,
    createdAt: 'create_at',
    updatedAt: 'update_at',
  }
)

export default cEspecie
