import type { Request, Response } from 'express'
import type { IPeriodoD } from '../../../@types/interfaces'
import dPeriodo from '../../../models/detalle/periodo_d_model'
import { handleErrorHttp } from '../../../util'

const getAllPeriodo = async (req: Request, res: Response) => {
  try {
    const [total, periodo] = await Promise.all([
      dPeriodo.count(),
      dPeriodo.findAll(),
    ])

    return res.status(200).json({
      total,
      periodo,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getPeriodo = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const periodo = await dPeriodo.findByPk(id)
    if (!periodo) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      periodo,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postPeriodo = async (req: Request, res: Response) => {
  const response = req.body as IPeriodoD | IPeriodoD[]
  try {
    if (Array.isArray(response)) {
      const periodo = await dPeriodo.bulkCreate(response)
      return res.status(200).json({
        periodo,
      })
    } else {
      const periodo = await dPeriodo.create(response)
      return res.status(200).json({
        periodo,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putPeriodo = async (req: Request, res: Response) => {
  const response = req.body as IPeriodoD
  const { id } = req.params

  try {
    const periodo = await dPeriodo.findByPk(id)
    if (!periodo) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await periodo.update(response)
    return res.status(200).json({
      periodo,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deletePeriodo = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const periodo = await dPeriodo.findByPk(id)
    if (!periodo) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await periodo.destroy()
    return res.status(200).json({
      periodo,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export { getAllPeriodo, getPeriodo, postPeriodo, putPeriodo, deletePeriodo }
