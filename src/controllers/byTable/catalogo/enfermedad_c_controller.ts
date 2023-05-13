import type { Request, Response } from 'express'
import type { IEnfermedadC } from '../../../@types/interfaces'
import cEnfermedad from '../../../models/catalogo/enfermedad_c_model'
import { handleErrorHttp } from '../../../util'

const getAllEnfermedad = async (req: Request, res: Response) => {
  try {
    const [total, enfermedad] = await Promise.all([
      cEnfermedad.count(),
      cEnfermedad.findAll(),
    ])

    return res.status(200).json({
      total,
      enfermedad,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getEnfermedad = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const enfermedad = await cEnfermedad.findByPk(id)
    if (!enfermedad) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      enfermedad,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postEnfermedad = async (req: Request, res: Response) => {
  const response = req.body as IEnfermedadC | IEnfermedadC[]
  try {
    if (Array.isArray(response)) {
      const enfermedad = await cEnfermedad.bulkCreate(response)
      return res.status(200).json({
        enfermedad,
      })
    } else {
      const enfermedad = await cEnfermedad.create(response)
      return res.status(200).json({
        enfermedad,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putEnfermedad = async (req: Request, res: Response) => {
  const response = req.body as IEnfermedadC
  const { id } = req.params

  try {
    const enfermedad = await cEnfermedad.findByPk(id)
    if (!enfermedad) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await enfermedad.update(response)
    return res.status(200).json({
      enfermedad,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteEnfermedad = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const enfermedad = await cEnfermedad.findByPk(id)
    if (!enfermedad) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await enfermedad.destroy()
    return res.status(200).json({
      enfermedad,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export {
  getAllEnfermedad,
  getEnfermedad,
  postEnfermedad,
  putEnfermedad,
  deleteEnfermedad,
}
