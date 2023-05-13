import { Router } from 'express'
import {
  getVenta,
  getAllVenta,
  postVenta,
  putVenta,
  deleteVenta,
} from '../../../controllers'

const ventaDRoute = Router()

ventaDRoute.get('/', getAllVenta)
ventaDRoute.get('/:id', getVenta)
ventaDRoute.post('/', postVenta)
ventaDRoute.put('/:id', putVenta)
ventaDRoute.delete('/:id', deleteVenta)

export default ventaDRoute
