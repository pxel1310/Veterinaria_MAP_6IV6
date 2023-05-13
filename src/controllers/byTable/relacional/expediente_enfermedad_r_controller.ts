import type { Request, Response } from 'express'
import type { IExpedienteEnfermedadR } from '../../../@types/interfaces'
import rExpedienteEnfermedad from '../../../models/relacional/expediente_enfermedad_r_model'
import { handleErrorHttp } from '../../../util'

const getAllExpedienteEnfermedad = async (req: Request, res: Response) => {
  try {
    const [total, expedientesEnfermedades] = await Promise.all([
      rExpedienteEnfermedad.count(),
      rExpedienteEnfermedad.findAll(),
    ])

    return res.status(200).json({
      total,
      expedientesEnfermedades,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getExpedienteEnfermedad = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const expedienteEnfermedad = await rExpedienteEnfermedad.findByPk(id)
    if (!expedienteEnfermedad) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      expedienteEnfermedad,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postExpedienteEnfermedad = async (req: Request, res: Response) => {
  const response = req.body as IExpedienteEnfermedadR | IExpedienteEnfermedadR[]
  try {
    if (Array.isArray(response)) {
      const expedientesEnfermedades = await rExpedienteEnfermedad.bulkCreate(
        response
      )
      return res.status(200).json({
        expedientesEnfermedades,
      })
    } else {
      const expedienteEnfermedad = await rExpedienteEnfermedad.create(response)
      return res.status(200).json({
        expedienteEnfermedad,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putExpedienteEnfermedad = async (req: Request, res: Response) => {
  const response = req.body as IExpedienteEnfermedadR
  const { id } = req.params

  try {
    const expedienteEnfermedad = await rExpedienteEnfermedad.findByPk(id)
    if (!expedienteEnfermedad) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await expedienteEnfermedad.update(response)
    return res.status(200).json({
      expedienteEnfermedad,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteExpedienteEnfermedad = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const expedienteEnfermedad = await rExpedienteEnfermedad.findByPk(id)
    if (!expedienteEnfermedad) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await expedienteEnfermedad.destroy()
    return res.status(200).json({ expedienteEnfermedad })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export {
  getAllExpedienteEnfermedad,
  getExpedienteEnfermedad,
  postExpedienteEnfermedad,
  putExpedienteEnfermedad,
  deleteExpedienteEnfermedad,
}
