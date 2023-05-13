import { Router } from 'express'
import {
  getExpediente,
  getAllExpediente,
  postExpediente,
  putExpediente,
  deleteExpediente,
} from '../../../controllers'

const expedienteMRoute = Router()

expedienteMRoute.get('/', getAllExpediente)
expedienteMRoute.get('/:id', getExpediente)
expedienteMRoute.post('/', postExpediente)
expedienteMRoute.put('/:id', putExpediente)
expedienteMRoute.delete('/:id', deleteExpediente)

export default expedienteMRoute
