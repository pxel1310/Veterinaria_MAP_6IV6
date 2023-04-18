import { IAt } from "../i_at";

export interface IPeriodoD extends IAt {
  id_per: number;
  fechaInicio_per: string;
  fechaTermino_per: string;
  agno_per: number;
  balance_per: number;
}
