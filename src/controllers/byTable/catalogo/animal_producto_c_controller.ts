import type { Request, Response } from 'express'
import type { IAnimalProductoC } from '../../../@types/interfaces'
import cAnimalProducto from '../../../models/catalogo/animal_producto_c_model'
import { handleErrorHttp } from '../../../util'

const getAllAnimalProducto = async (req: Request, res: Response) => {
  try {
    const [total, animalProducto] = await Promise.all([
      cAnimalProducto.count(),
      cAnimalProducto.findAll(),
    ])

    return res.status(200).json({
      total,
      animalProducto,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getAnimalProducto = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const animalProducto = await cAnimalProducto.findByPk(id)
    if (!animalProducto) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      animalProducto,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postAnimalProducto = async (req: Request, res: Response) => {
  const response = req.body as IAnimalProductoC | IAnimalProductoC[]
  try {
    if (Array.isArray(response)) {
      const animalProducto = await cAnimalProducto.bulkCreate(response)
      return res.status(200).json({
        animalProducto,
      })
    } else {
      const animalProducto = await cAnimalProducto.create(response)
      return res.status(200).json({
        animalProducto,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putAnimalProducto = async (req: Request, res: Response) => {
  const response = req.body as IAnimalProductoC
  const { id } = req.params

  try {
    const animalProducto = await cAnimalProducto.findByPk(id)
    if (!animalProducto) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await animalProducto.update(response)
    return res.status(200).json({
      animalProducto,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteAnimalProducto = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const animalProducto = await cAnimalProducto.findByPk(id)
    if (!animalProducto) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await animalProducto.destroy()
    return res.status(200).json({
      animalProducto,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export {
  getAllAnimalProducto,
  getAnimalProducto,
  postAnimalProducto,
  putAnimalProducto,
  deleteAnimalProducto,
}
