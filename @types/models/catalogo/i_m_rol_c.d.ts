import { Model } from "sequelize";

import type { IRolC } from "../../interfaces";

export interface IMRolC extends Model<IRolC>, IRolC {}
