import { Router } from 'express'
import {
  getAllEnfermedad,
  getEnfermedad,
  postEnfermedad,
  putEnfermedad,
  deleteEnfermedad,
} from '../../../controllers'

const enfermedadCRoute = Router()

enfermedadCRoute.get('/', getAllEnfermedad)
enfermedadCRoute.get('/:id', getEnfermedad)
enfermedadCRoute.post('/', postEnfermedad)
enfermedadCRoute.put('/:id', putEnfermedad)
enfermedadCRoute.delete('/:id', deleteEnfermedad)

export default enfermedadCRoute
