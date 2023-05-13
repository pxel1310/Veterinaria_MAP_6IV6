import { Router } from 'express'
import {
  getAllAnimalProducto,
  getAnimalProducto,
  postAnimalProducto,
  putAnimalProducto,
  deleteAnimalProducto,
} from '../../../controllers'

const animalProductoCRoute = Router()

animalProductoCRoute.get('/', getAllAnimalProducto)
animalProductoCRoute.get('/:id', getAnimalProducto)
animalProductoCRoute.post('/', postAnimalProducto)
animalProductoCRoute.put('/:id', putAnimalProducto)
animalProductoCRoute.delete('/:id', deleteAnimalProducto)

export default animalProductoCRoute
