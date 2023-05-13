import { Router } from 'express'
import {
  getDuenoVeterinaria,
  getAllDuenoVeterinaria,
  postDuenoVeterinaria,
  putDuenoVeterinaria,
  deleteDuenoVeterinaria,
} from '../../../controllers'
const duenoVeterinariaDRoute = Router()

duenoVeterinariaDRoute.get('/', getAllDuenoVeterinaria)
duenoVeterinariaDRoute.get('/:id', getDuenoVeterinaria)
duenoVeterinariaDRoute.post('/', postDuenoVeterinaria)
duenoVeterinariaDRoute.put('/:id', putDuenoVeterinaria)
duenoVeterinariaDRoute.delete('/:id', deleteDuenoVeterinaria)

export default duenoVeterinariaDRoute
