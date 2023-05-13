import { DataTypes } from 'sequelize'

import type { IMUsersAccessE } from '../../@types/models'
import dbConnection from '../../database/connection'

const eUsersAccess = dbConnection.define<IMUsersAccessE>(
  'eUsersAccess',
  {
    id_useacc: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    correo_useacc: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password_useacc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    boleta_useacc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [10, 10],
          msg: 'La boleta debe tener 10 caracteres',
        },
      },
    },
    api_token_useacc: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'E_UsersAccess',
    timestamps: true,
    createdAt: 'create_at',
    updatedAt: 'update_at',
  }
)

export default eUsersAccess
