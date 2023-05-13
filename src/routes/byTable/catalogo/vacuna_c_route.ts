import { Router } from 'express'
import {
  getAllVacuna,
  getVacuna,
  postVacuna,
  putVacuna,
  deleteVacuna,
} from '../../../controllers'

const vacunaCRoute = Router()

vacunaCRoute.get('/', getAllVacuna)
vacunaCRoute.get('/:id', getVacuna)
vacunaCRoute.post('/', postVacuna)
vacunaCRoute.put('/:id', putVacuna)
vacunaCRoute.delete('/:id', deleteVacuna)

export default vacunaCRoute
