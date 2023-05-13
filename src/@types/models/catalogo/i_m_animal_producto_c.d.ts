import { Model } from 'sequelize'

import type { IAnimalProductoC } from '../../interfaces'

export interface IMAnimalProductoC
  extends Model<IAnimalProductoC>,
    IAnimalProductoC {}
