import { Router } from 'express'
import {
  getVeterinaria,
  getAllVeterinaria,
  postVeterinaria,
  putVeterinaria,
  deleteVeterinaria,
} from '../../../controllers'

const veterinariaMRoute = Router()

veterinariaMRoute.get('/', getAllVeterinaria)
veterinariaMRoute.get('/:id', getVeterinaria)
veterinariaMRoute.post('/', postVeterinaria)
veterinariaMRoute.put('/:id', putVeterinaria)
veterinariaMRoute.delete('/:id', deleteVeterinaria)

export default veterinariaMRoute
