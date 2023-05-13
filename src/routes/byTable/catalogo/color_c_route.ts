import { Router } from 'express'
import {
  getColor,
  getAllColor,
  postColor,
  putColor,
  deleteColor,
} from '../../../controllers'

const colorCRoute = Router()

colorCRoute.get('/', getAllColor)
colorCRoute.get('/:id', getColor)
colorCRoute.post('/', postColor)
colorCRoute.put('/:id', putColor)
colorCRoute.delete('/:id', deleteColor)

export default colorCRoute
