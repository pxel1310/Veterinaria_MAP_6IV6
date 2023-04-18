import { Model } from "sequelize";

import type { IColorC } from "../../interfaces";

export interface IMColorC extends Model<IColorC>, IColorC {}
