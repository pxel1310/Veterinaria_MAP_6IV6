import type { Request, Response } from 'express'
import type { IServicioC } from '../../../@types/interfaces'
import cServicio from '../../../models/catalogo/servicio_c_model'
import { handleErrorHttp } from '../../../util'

const getAllServicio = async (req: Request, res: Response) => {
  try {
    const [total, servicio] = await Promise.all([
      cServicio.count(),
      cServicio.findAll(),
    ])

    return res.status(200).json({
      total,
      servicio,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getServicio = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const servicio = await cServicio.findByPk(id)
    if (!servicio) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      servicio,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postServicio = async (req: Request, res: Response) => {
  const response = req.body as IServicioC | IServicioC[]
  try {
    if (Array.isArray(response)) {
      const servicio = await cServicio.bulkCreate(response)
      return res.status(200).json({
        servicio,
      })
    } else {
      const servicio = await cServicio.create(response)
      return res.status(200).json({
        servicio,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putServicio = async (req: Request, res: Response) => {
  const response = req.body as IServicioC
  const { id } = req.params

  try {
    const servicio = await cServicio.findByPk(id)
    if (!servicio) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await servicio.update(response)
    return res.status(200).json({
      servicio,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteServicio = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const servicio = await cServicio.findByPk(id)
    if (!servicio) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await servicio.destroy()
    return res.status(200).json({
      servicio,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export {
  getAllServicio,
  getServicio,
  postServicio,
  putServicio,
  deleteServicio,
}
