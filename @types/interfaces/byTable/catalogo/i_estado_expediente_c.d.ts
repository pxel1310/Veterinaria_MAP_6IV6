import { IAt } from "../i_at";

export interface IEstadoExpedienteC extends IAt {
  id_estexp: number;
  nombre_estexp: string;
  descripcion_estexp: string;
}
