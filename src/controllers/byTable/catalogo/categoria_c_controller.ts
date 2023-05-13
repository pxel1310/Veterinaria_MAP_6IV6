import type { Request, Response } from 'express'

import type { ICategoriaC } from '../../../@types/interfaces'

import cCategoria from '../../../models/catalogo/categoria_c_model'

import { handleErrorHttp } from '../../../util'

const getAllCategoria = async (req: Request, res: Response) => {
  try {
    const [total, categoria] = await Promise.all([
      cCategoria.count(),
      cCategoria.findAll(),
    ])

    return res.status(200).json({
      total,
      categoria,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getCategoria = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const categoria = await cCategoria.findByPk(id)
    if (!categoria) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      categoria,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postCategoria = async (req: Request, res: Response) => {
  const response = req.body as ICategoriaC | ICategoriaC[]
  try {
    if (Array.isArray(response)) {
      const categoria = await cCategoria.bulkCreate(response)
      return res.status(200).json({
        categoria,
      })
    } else {
      const categoria = await cCategoria.create(response)
      return res.status(200).json({
        categoria,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putCategoria = async (req: Request, res: Response) => {
  const { id } = req.params
  const response = req.body as ICategoriaC

  try {
    const categoria = await cCategoria.findByPk(id)
    if (!categoria) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await categoria.update(response)
    return res.status(200).json({
      categoria,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteCategoria = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const categoria = await cCategoria.findByPk(id)
    if (!categoria) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await categoria.destroy()
    return res.status(200).json({
      categoria,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export {
  getAllCategoria,
  getCategoria,
  postCategoria,
  putCategoria,
  deleteCategoria,
}
