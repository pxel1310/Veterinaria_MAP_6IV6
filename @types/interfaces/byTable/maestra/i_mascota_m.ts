import { IAt } from "../i_at";

export interface IMascotaM extends IAt {
  id_mas: number;
  id_cli: number;
  nombre_mas: string;
  fechaNac_mas: string;
  urlFoto_mas: string;
  id_raz: number;
  id_sex: number;
  id_col: number;
}
