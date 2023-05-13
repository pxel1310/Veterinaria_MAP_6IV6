import { Model } from 'sequelize'

import type { IVentaD } from '../../interfaces'

export interface IMVentaD extends Model<IVentaD>, IVentaD {}
