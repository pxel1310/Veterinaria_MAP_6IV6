import type { Request, Response } from 'express'
import type { IVacunaC } from '../../../@types/interfaces'
import cVacuna from '../../../models/catalogo/vacuna_c_model'
import { handleErrorHttp } from '../../../util'

const getAllVacuna = async (req: Request, res: Response) => {
  try {
    const [total, vacuna] = await Promise.all([
      cVacuna.count(),
      cVacuna.findAll(),
    ])

    return res.status(200).json({
      total,
      vacuna,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getVacuna = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const vacuna = await cVacuna.findByPk(id)
    if (!vacuna) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      vacuna,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postVacuna = async (req: Request, res: Response) => {
  const response = req.body as IVacunaC | IVacunaC[]
  try {
    if (Array.isArray(response)) {
      const vacuna = await cVacuna.bulkCreate(response)
      return res.status(200).json({
        vacuna,
      })
    } else {
      const vacuna = await cVacuna.create(response)
      return res.status(200).json({
        vacuna,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putVacuna = async (req: Request, res: Response) => {
  const response = req.body as IVacunaC
  const { id } = req.params

  try {
    const vacuna = await cVacuna.findByPk(id)
    if (!vacuna) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await vacuna.update(response)
    return res.status(200).json({
      vacuna,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteVacuna = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const vacuna = await cVacuna.findByPk(id)
    if (!vacuna) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await vacuna.destroy()
    return res.status(200).json({
      vacuna,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export { getAllVacuna, getVacuna, postVacuna, putVacuna, deleteVacuna }
