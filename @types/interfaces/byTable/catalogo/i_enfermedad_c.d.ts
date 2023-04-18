import { IAt } from "../i_at";

export interface IEnfermedadC extends IAt {
  id_enf: number;
  nombre_enf: string;
  descripcion_enf: string;
}
