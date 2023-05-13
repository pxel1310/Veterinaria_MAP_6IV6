import { Router } from 'express'
import {
  getAllCategoria,
  getCategoria,
  postCategoria,
  putCategoria,
  deleteCategoria,
} from '../../../controllers'

const categoriaCRoute = Router()

categoriaCRoute.get('/', getAllCategoria)
categoriaCRoute.get('/:id', getCategoria)
categoriaCRoute.post('/', postCategoria)
categoriaCRoute.put('/:id', putCategoria)
categoriaCRoute.delete('/:id', deleteCategoria)

export default categoriaCRoute
