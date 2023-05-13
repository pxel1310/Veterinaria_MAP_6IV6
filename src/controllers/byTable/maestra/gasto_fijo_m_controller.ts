import type { Request, Response } from 'express'
import type { IGastoFijoM } from '../../../@types/interfaces'
import mGastoFijo from '../../../models/maestra/gasto_fijo_m_model'
import { handleErrorHttp } from '../../../util'

const getAllGastoFijo = async (req: Request, res: Response) => {
  try {
    const [total, gastoFijo] = await Promise.all([
      mGastoFijo.count(),
      mGastoFijo.findAll(),
    ])

    return res.status(200).json({
      total,
      gastoFijo,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getGastoFijo = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const gastoFijo = await mGastoFijo.findByPk(id)
    if (!gastoFijo) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      gastoFijo,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postGastoFijo = async (req: Request, res: Response) => {
  const response = req.body as IGastoFijoM | IGastoFijoM[]
  try {
    if (Array.isArray(response)) {
      const gastoFijo = await mGastoFijo.bulkCreate(response)
      return res.status(200).json({
        gastoFijo,
      })
    } else {
      const gastoFijo = await mGastoFijo.create(response)
      return res.status(200).json({
        gastoFijo,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putGastoFijo = async (req: Request, res: Response) => {
  const response = req.body as IGastoFijoM
  const { id } = req.params

  try {
    const gastoFijo = await mGastoFijo.findByPk(id)
    if (!gastoFijo) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await gastoFijo.update(response)
    return res.status(200).json({
      gastoFijo,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteGastoFijo = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const gastoFijo = await mGastoFijo.findByPk(id)
    if (!gastoFijo) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await gastoFijo.destroy()
    return res.status(200).json({
      gastoFijo,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export {
  getAllGastoFijo,
  getGastoFijo,
  postGastoFijo,
  putGastoFijo,
  deleteGastoFijo,
}
