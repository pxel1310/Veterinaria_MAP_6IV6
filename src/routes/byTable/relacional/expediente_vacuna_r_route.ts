import { Router } from 'express'
import {
  getExpedienteVacuna,
  getAllExpedienteVacuna,
  postExpedienteVacuna,
  putExpedienteVacuna,
  deleteExpedienteVacuna,
} from '../../../controllers'

const expedienteVacunaRRoute = Router()

expedienteVacunaRRoute.get('/', getAllExpedienteVacuna)
expedienteVacunaRRoute.get('/:id', getExpedienteVacuna)
expedienteVacunaRRoute.post('/', postExpedienteVacuna)
expedienteVacunaRRoute.put('/:id', putExpedienteVacuna)
expedienteVacunaRRoute.delete('/:id', deleteExpedienteVacuna)

export default expedienteVacunaRRoute
