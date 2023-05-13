import { DataTypes } from 'sequelize'

import type { IMServicioC } from '../../@types/models'
import dbConnection from '../../database/connection'

const cServicio = dbConnection.define<IMServicioC>(
  'cServicio',
  {
    id_ser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre_ser: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descripcion_ser: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'Sin descripción',
    },
    estado_ser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: 'C_Servicio',
    timestamps: true,
    createdAt: 'create_at',
    updatedAt: 'update_at',
  }
)

export default cServicio
