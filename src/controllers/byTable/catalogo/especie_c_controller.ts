import type { Request, Response } from 'express'
import type { IEspecieC } from '../../../@types/interfaces'
import cEspecie from '../../../models/catalogo/especie_c_model'
import { handleErrorHttp } from '../../../util'

const getAllEspecie = async (req: Request, res: Response) => {
  try {
    const [total, especie] = await Promise.all([
      cEspecie.count(),
      cEspecie.findAll(),
    ])

    return res.status(200).json({
      total,
      especie,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getEspecie = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const especie = await cEspecie.findByPk(id)
    if (!especie) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      especie,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postEspecie = async (req: Request, res: Response) => {
  const response = req.body as IEspecieC | IEspecieC[]
  try {
    if (Array.isArray(response)) {
      const especie = await cEspecie.bulkCreate(response)
      return res.status(200).json({
        especie,
      })
    } else {
      const especie = await cEspecie.create(response)
      return res.status(200).json({
        especie,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putEspecie = async (req: Request, res: Response) => {
  const response = req.body as IEspecieC
  const { id } = req.params

  try {
    const especie = await cEspecie.findByPk(id)
    if (!especie) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await especie.update(response)
    return res.status(200).json({
      especie,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteEspecie = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const especie = await cEspecie.findByPk(id)
    if (!especie) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await especie.destroy()
    return res.status(200).json({
      especie,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export { getAllEspecie, getEspecie, postEspecie, putEspecie, deleteEspecie }
