import { IAt } from '../i_at'

export interface IProductoM extends IAt {
  id_pro: number
  nombre_pro: string
  stockId_pro: number
  precioVenta_pro: number
  estado_pro: boolean
  id_cat: number
  id_mar: number
  id_anipro: number
  id_vet: number
}
