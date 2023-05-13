import type { Request, Response } from 'express'
import type { IVeterinariaM } from '../../../@types/interfaces'
import mVeterinaria from '../../../models/maestra/veterinaria_m_model'
import { handleErrorHttp } from '../../../util'

const getAllVeterinaria = async (req: Request, res: Response) => {
  try {
    const [total, veterinaria] = await Promise.all([
      mVeterinaria.count(),
      mVeterinaria.findAll(),
    ])

    return res.status(200).json({
      total,
      veterinaria,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getVeterinaria = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const veterinaria = await mVeterinaria.findByPk(id)
    if (!veterinaria) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      veterinaria,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postVeterinaria = async (req: Request, res: Response) => {
  const response = req.body as IVeterinariaM | IVeterinariaM[]
  try {
    if (Array.isArray(response)) {
      const veterinaria = await mVeterinaria.bulkCreate(response)
      return res.status(200).json({
        veterinaria,
      })
    } else {
      const veterinaria = await mVeterinaria.create(response)
      return res.status(200).json({
        veterinaria,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putVeterinaria = async (req: Request, res: Response) => {
  const response = req.body as IVeterinariaM
  const { id } = req.params

  try {
    const veterinaria = await mVeterinaria.findByPk(id)
    if (!veterinaria) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await veterinaria.update(response)
    return res.status(200).json({
      veterinaria,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteVeterinaria = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const veterinaria = await mVeterinaria.findByPk(id)
    if (!veterinaria) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await veterinaria.destroy()
    return res.status(200).json({
      veterinaria,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export {
  getAllVeterinaria,
  getVeterinaria,
  postVeterinaria,
  putVeterinaria,
  deleteVeterinaria,
}
