import type { Request, Response } from 'express'
import type { IExpedienteVacunaR } from '../../../@types/interfaces'
import rExpedienteVacuna from '../../../models/relacional/expediente_vacuna_r_model'
import { handleErrorHttp } from '../../../util'

const getAllExpedienteVacuna = async (req: Request, res: Response) => {
  try {
    const [total, expedienteVacuna] = await Promise.all([
      rExpedienteVacuna.count(),
      rExpedienteVacuna.findAll(),
    ])

    return res.status(200).json({
      total,
      expedienteVacuna,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getExpedienteVacuna = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const expedienteVacuna = await rExpedienteVacuna.findByPk(id)
    if (!expedienteVacuna) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      expedienteVacuna,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postExpedienteVacuna = async (req: Request, res: Response) => {
  const response = req.body as IExpedienteVacunaR | IExpedienteVacunaR[]
  try {
    if (Array.isArray(response)) {
      const expedienteVacuna = await rExpedienteVacuna.bulkCreate(response)
      return res.status(200).json({
        expedienteVacuna,
      })
    } else {
      const expedienteVacuna = await rExpedienteVacuna.create(response)
      return res.status(200).json({
        expedienteVacuna,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putExpedienteVacuna = async (req: Request, res: Response) => {
  const response = req.body as IExpedienteVacunaR
  const { id } = req.params

  try {
    const expedienteVacuna = await rExpedienteVacuna.findByPk(id)
    if (!expedienteVacuna) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await expedienteVacuna.update(response)
    return res.status(200).json({
      expedienteVacuna,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteExpedienteVacuna = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const expedienteVacuna = await rExpedienteVacuna.findByPk(id)
    if (!expedienteVacuna) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await expedienteVacuna.destroy()
    return res.status(200).json({
      expedienteVacuna,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export {
  getAllExpedienteVacuna,
  getExpedienteVacuna,
  postExpedienteVacuna,
  putExpedienteVacuna,
  deleteExpedienteVacuna,
}
