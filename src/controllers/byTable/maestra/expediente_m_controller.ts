import type { Request, Response } from 'express'
import type { IExpedienteM } from '../../../@types/interfaces'
import mExpediente from '../../../models/maestra/expediente_m_model'
import { handleErrorHttp } from '../../../util'

const getAllExpediente = async (req: Request, res: Response) => {
  try {
    const [total, expediente] = await Promise.all([
      mExpediente.count(),
      mExpediente.findAll(),
    ])

    return res.status(200).json({
      total,
      expediente,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getExpediente = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const expediente = await mExpediente.findByPk(id)
    if (!expediente) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      expediente,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postExpediente = async (req: Request, res: Response) => {
  const response = req.body as IExpedienteM | IExpedienteM[]
  try {
    if (Array.isArray(response)) {
      const expediente = await mExpediente.bulkCreate(response)
      return res.status(200).json({
        expediente,
      })
    } else {
      const expediente = await mExpediente.create(response)
      return res.status(200).json({
        expediente,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putExpediente = async (req: Request, res: Response) => {
  const response = req.body as IExpedienteM
  const { id } = req.params

  try {
    const expediente = await mExpediente.findByPk(id)
    if (!expediente) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await expediente.update(response)
    return res.status(200).json({
      expediente,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteExpediente = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const expediente = await mExpediente.findByPk(id)
    if (!expediente) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await expediente.destroy()
    return res.status(200).json({
      expediente,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export {
  getAllExpediente,
  getExpediente,
  postExpediente,
  putExpediente,
  deleteExpediente,
}
