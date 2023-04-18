import { IAt } from "../i_at";

export interface IVentaD extends IAt {
  id_ven: number;
  fecha_ven: string;
  hora_ven: string;
  hora_ven: string;
  montoSubtotal_ven: number;
  montoTotal_ven: number;
  id_per: number;
}
