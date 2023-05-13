import type { Request, Response } from 'express'
import type { IRazaC } from '../../../@types/interfaces'
import cRaza from '../../../models/catalogo/raza_c_model'
import { handleErrorHttp } from '../../../util'

const getAllRaza = async (req: Request, res: Response) => {
  try {
    const [total, raza] = await Promise.all([cRaza.count(), cRaza.findAll()])

    return res.status(200).json({
      total,
      raza,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getRaza = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const raza = await cRaza.findByPk(id)
    if (!raza) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      raza,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postRaza = async (req: Request, res: Response) => {
  const response = req.body as IRazaC | IRazaC[]
  try {
    if (Array.isArray(response)) {
      const raza = await cRaza.bulkCreate(response)
      return res.status(200).json({
        raza,
      })
    } else {
      const raza = await cRaza.create(response)
      return res.status(200).json({
        raza,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putRaza = async (req: Request, res: Response) => {
  const response = req.body as IRazaC
  const { id } = req.params

  try {
    const raza = await cRaza.findByPk(id)
    if (!raza) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await raza.update(response)
    return res.status(200).json({
      raza,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteRaza = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const raza = await cRaza.findByPk(id)
    if (!raza) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await raza.destroy()
    return res.status(200).json({
      raza,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export { getAllRaza, getRaza, postRaza, putRaza, deleteRaza }
