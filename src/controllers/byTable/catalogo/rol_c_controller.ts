import type { Request, Response } from 'express'
import type { IRolC } from '../../../@types/interfaces'
import cRol from '../../../models/catalogo/rol_c_model'
import { handleErrorHttp } from '../../../util'

const getAllRol = async (req: Request, res: Response) => {
  try {
    const [total, rol] = await Promise.all([cRol.count(), cRol.findAll()])

    return res.status(200).json({
      total,
      rol,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getRol = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const rol = await cRol.findByPk(id)
    if (!rol) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      rol,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postRol = async (req: Request, res: Response) => {
  const response = req.body as IRolC | IRolC[]
  try {
    if (Array.isArray(response)) {
      const rol = await cRol.bulkCreate(response)
      return res.status(200).json({
        rol,
      })
    } else {
      const rol = await cRol.create(response)
      return res.status(200).json({
        rol,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putRol = async (req: Request, res: Response) => {
  const response = req.body as IRolC
  const { id } = req.params

  try {
    const rol = await cRol.findByPk(id)
    if (!rol) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await rol.update(response)
    return res.status(200).json({
      rol,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteRol = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const rol = await cRol.findByPk(id)
    if (!rol) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await rol.destroy()
    return res.status(200).json({
      rol,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export { getAllRol, getRol, postRol, putRol, deleteRol }
