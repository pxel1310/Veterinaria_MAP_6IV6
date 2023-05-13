import { Router } from 'express'
import {
  getLote,
  getAllLote,
  postLote,
  putLote,
  deleteLote,
} from '../../../controllers'

const loteMRoute = Router()

loteMRoute.get('/', getAllLote)
loteMRoute.get('/:id', getLote)
loteMRoute.post('/', postLote)
loteMRoute.put('/:id', putLote)
loteMRoute.delete('/:id', deleteLote)

export default loteMRoute
