import { IAt } from '../i_at'

export interface IServicioC extends IAt {
  id_ser: number
  nombre_ser: string
  descripcion_ser: string
  estado_ser: boolean
}
