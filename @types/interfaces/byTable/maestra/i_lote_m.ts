import { IAt } from "../i_at";

export interface ILoteM extends IAt {
  id_lot: number;
  cantidadProducto_lot: number;
  fechaEntrada_lot: Date;
  fechaCaducidad_lot: Date;
  precioUnitario_lot: number;
  montoTotal_lot: number;
  id_per: number;
  id_prov: number;
  id_pro: string;
}
