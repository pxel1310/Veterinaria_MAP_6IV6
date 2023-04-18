import { IAt } from "../i_at";

export interface IGastoFijoM extends IAt {
  id_gasfij: number;
  fecha_gasfij: Date;
  monto_gasfij: number;
  id_ser: number;
  id_per: number;
}
