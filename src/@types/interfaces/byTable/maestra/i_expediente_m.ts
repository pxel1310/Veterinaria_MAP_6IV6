import { IAt } from '../i_at'

export interface IExpedienteM extends IAt {
  id_exp: number
  motivo_exp: string
  antecedentes_exp: string
  diagnostico_exp: string
  receta_exp: string
  fecha_exp: Date
  id_mas: number
  id_estexp: number
}
