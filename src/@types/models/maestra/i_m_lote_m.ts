import { Model } from 'sequelize'

import type { ILoteM } from '../../interfaces'

export interface IMLoteM extends Model<ILoteM>, ILoteM {}
