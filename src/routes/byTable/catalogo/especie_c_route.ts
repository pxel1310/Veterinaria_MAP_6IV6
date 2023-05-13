import { Router } from 'express'
import {
  getAllEspecie,
  getEspecie,
  postEspecie,
  putEspecie,
  deleteEspecie,
} from '../../../controllers'

const especieCRoute = Router()

especieCRoute.get('/', getAllEspecie)
especieCRoute.get('/:id', getEspecie)
especieCRoute.post('/', postEspecie)
especieCRoute.put('/:id', putEspecie)
especieCRoute.delete('/:id', deleteEspecie)

export default especieCRoute
