import { IAt } from "../i_at";

export interface IVeterinariaM extends IAt {
  id_vet: number;
  nombre_vet: string;
  direccion_vet: string;
  telefono_vet: string;
  correo_vet: string;
}
