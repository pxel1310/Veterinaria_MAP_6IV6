import { IAt } from "../i_at";

export interface IProductoVentaM extends IAt {
  id_proven: number;
  cantidad_proven: number;
  montoSubtotal_proven: number;
  montoTotal_proven: number;
  id_ven: number;
  id_pro: string;
}
