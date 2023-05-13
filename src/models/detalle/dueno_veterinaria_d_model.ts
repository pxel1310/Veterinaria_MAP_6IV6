import { DataTypes } from 'sequelize'

import type { IMDuenoVeterinariaD } from '../../@types/models'
import dbConnection from '../../database/connection'

import mUsuario from '../maestra/usuario_m_model'
import mVeterinaria from '../maestra/veterinaria_m_model'

const dDuenoVeterinaria = dbConnection.define<IMDuenoVeterinariaD>(
  'dDuenoVeterinaria',
  {
    id_duevet: {
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
        key: 'id_usu',
      },
    },
    nombre_duevet: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    id_vet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: mVeterinaria,
        key: 'id_vet',
      },
    },
  },
  {
    tableName: 'D_DuenoVeterinaria',
    timestamps: true,
    createdAt: 'create_at',
    updatedAt: 'update_at',
  }
)

mUsuario.hasOne(dDuenoVeterinaria, {
  foreignKey: 'id_usu',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
})

dDuenoVeterinaria.belongsTo(mUsuario, {
  foreignKey: 'id_usu',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
})

mVeterinaria.hasOne(dDuenoVeterinaria, {
  foreignKey: 'id_vet',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
})

dDuenoVeterinaria.belongsTo(mVeterinaria, {
  foreignKey: 'id_vet',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
})

export default dDuenoVeterinaria
