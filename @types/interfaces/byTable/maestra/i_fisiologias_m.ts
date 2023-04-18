import { IAt } from "../i_at";

export interface IFisiologiaM extends IAt {
  id_fis: number;
  pulso_fis: number;
  altura_fis: number;
  dieta_fis: string;
  tipoAlimentacion_fis: string;
  cantidadAlimentacion_fis: number;
  temperatura_fis: number;
  frecuenciaCardiaca_fis: number;
  frecuenciaRespiratoria_fis: number;
  id_mas: number;
}
