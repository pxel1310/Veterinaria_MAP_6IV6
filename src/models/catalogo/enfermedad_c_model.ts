import { DataTypes } from 'sequelize'

import type { IMEnfermedadC } from '../../@types/models'
import dbConnection from '../../database/connection'

const cEnfermedad = dbConnection.define<IMEnfermedadC>(
  'cEnfermedad',
  {
    id_enf: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre_enf: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descripcion_enf: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'Sin descripción',
    },
  },
  {
    tableName: 'C_Enfermedad',
    timestamps: true,
    createdAt: 'create_at',
    updatedAt: 'update_at',
  }
)

export default cEnfermedad
