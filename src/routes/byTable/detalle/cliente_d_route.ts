import { Router } from 'express'
import {
  getCliente,
  getAllCliente,
  postCliente,
  putCliente,
  deleteCliente,
} from '../../../controllers'

const clienteDRoute = Router()

clienteDRoute.get('/', getAllCliente)
clienteDRoute.get('/:id', getCliente)
clienteDRoute.post('/', postCliente)
clienteDRoute.put('/:id', putCliente)
clienteDRoute.delete('/:id', deleteCliente)

export default clienteDRoute
