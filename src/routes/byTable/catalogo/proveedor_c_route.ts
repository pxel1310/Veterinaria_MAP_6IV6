import { Router } from 'express'
import {
  getProveedor,
  getAllProveedor,
  postProveedor,
  putProveedor,
  deleteProveedor,
} from '../../../controllers'

const proveedorCRoute = Router()

proveedorCRoute.get('/', getAllProveedor)
proveedorCRoute.get('/:id', getProveedor)
proveedorCRoute.post('/', postProveedor)
proveedorCRoute.put('/:id', putProveedor)
proveedorCRoute.delete('/:id', deleteProveedor)

export default proveedorCRoute
