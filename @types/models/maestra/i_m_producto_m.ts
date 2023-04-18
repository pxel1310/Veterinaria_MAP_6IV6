import { Model } from "sequelize";

import type { IProductoM } from "../../interfaces";

export interface IMProductoM extends Model<IProductoM>, IProductoM {}
