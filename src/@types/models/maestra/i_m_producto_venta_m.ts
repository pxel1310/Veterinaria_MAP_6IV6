import { Model } from 'sequelize'

import type { IProductoVentaM } from '../../interfaces'

export interface IMProductoVentaM
  extends Model<IProductoVentaM>,
    IProductoVentaM {}
