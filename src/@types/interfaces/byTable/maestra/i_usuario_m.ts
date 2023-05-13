import { IAt } from '../i_at'

export interface IUsuarioM extends IAt {
  id_usu: number
  correo_usu: string
  contrasena_usu: string
  id_rol: number
}
