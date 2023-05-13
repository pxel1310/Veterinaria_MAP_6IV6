import type { Request, Response } from 'express'
import type { IFisiologiaM } from '../../../@types/interfaces'
import mFisiologias from '../../../models/maestra/fisiologias_m_model'
import { handleErrorHttp } from '../../../util'

const getAllFisiologia = async (req: Request, res: Response) => {
  try {
    const [total, fisiologia] = await Promise.all([
      mFisiologias.count(),
      mFisiologias.findAll(),
    ])

    return res.status(200).json({
      total,
      fisiologia,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getFisiologia = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const fisiologia = await mFisiologias.findByPk(id)
    if (!fisiologia) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      fisiologia,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postFisiologia = async (req: Request, res: Response) => {
  const response = req.body as IFisiologiaM | IFisiologiaM[]
  try {
    if (Array.isArray(response)) {
      const fisiologia = await mFisiologias.bulkCreate(response)
      return res.status(200).json({
        fisiologia,
      })
    } else {
      const fisiologia = await mFisiologias.create(response)
      return res.status(200).json({
        fisiologia,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putFisiologia = async (req: Request, res: Response) => {
  const response = req.body as IFisiologiaM
  const { id } = req.params

  try {
    const fisiologia = await mFisiologias.findByPk(id)
    if (!fisiologia) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await fisiologia.update(response)
    return res.status(200).json({
      fisiologia,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteFisiologia = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const fisiologia = await mFisiologias.findByPk(id)
    if (!fisiologia) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await fisiologia.destroy()
    return res.status(200).json({
      fisiologia,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export {
  getAllFisiologia,
  getFisiologia,
  postFisiologia,
  putFisiologia,
  deleteFisiologia,
}
