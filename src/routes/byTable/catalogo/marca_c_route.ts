import { Router } from 'express'
import {
  getMarca,
  getAllMarca,
  postMarca,
  putMarca,
  deleteMarca,
} from '../../../controllers'

const marcaCRoute = Router()

marcaCRoute.get('/', getAllMarca)
marcaCRoute.get('/:id', getMarca)
marcaCRoute.post('/', postMarca)
marcaCRoute.put('/:id', putMarca)
marcaCRoute.delete('/:id', deleteMarca)

export default marcaCRoute
