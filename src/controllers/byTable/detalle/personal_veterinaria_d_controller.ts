import type { Request, Response } from 'express'
import type { IPersonalVeterinariaD } from '../../../@types/interfaces'
import dPersonalVeterinaria from '../../../models/detalle/personal_veterinaria_d_model'
import { handleErrorHttp } from '../../../util'

const getAllPersonalVeterinaria = async (req: Request, res: Response) => {
  try {
    const [total, personalVeterinaria] = await Promise.all([
      dPersonalVeterinaria.count(),
      dPersonalVeterinaria.findAll(),
    ])

    return res.status(200).json({
      total,
      personalVeterinaria,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getPersonalVeterinaria = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const personalVeterinaria = await dPersonalVeterinaria.findByPk(id)
    if (!personalVeterinaria) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      personalVeterinaria,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postPersonalVeterinaria = async (req: Request, res: Response) => {
  const response = req.body as IPersonalVeterinariaD | IPersonalVeterinariaD[]
  try {
    if (Array.isArray(response)) {
      const personalVeterinaria = await dPersonalVeterinaria.bulkCreate(
        response
      )
      return res.status(200).json({
        personalVeterinaria,
      })
    } else {
      const personalVeterinaria = await dPersonalVeterinaria.create(response)
      return res.status(200).json({
        personalVeterinaria,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putPersonalVeterinaria = async (req: Request, res: Response) => {
  const response = req.body as IPersonalVeterinariaD
  const { id } = req.params

  try {
    const personalVeterinaria = await dPersonalVeterinaria.findByPk(id)
    if (!personalVeterinaria) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await personalVeterinaria.update(response)
    return res.status(200).json({
      personalVeterinaria,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deletePersonalVeterinaria = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const personalVeterinaria = await dPersonalVeterinaria.findByPk(id)
    if (!personalVeterinaria) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await personalVeterinaria.destroy()
    return res.status(200).json({
      personalVeterinaria,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export {
  getAllPersonalVeterinaria,
  getPersonalVeterinaria,
  postPersonalVeterinaria,
  putPersonalVeterinaria,
  deletePersonalVeterinaria,
}
