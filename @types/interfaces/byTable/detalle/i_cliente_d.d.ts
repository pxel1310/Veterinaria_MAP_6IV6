import { IAt } from "../i_at";

export interface IClienteD extends IAt {
  id_cli: number;
  id_usu: number;
  nombre_cli: string;
  direccion_cli: string;
  telefono_cli: string;
  correo_cli: string;
  id_vet: number;
}
