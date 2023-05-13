import type { Request, Response } from 'express'
import type { IProveedorC } from '../../../@types/interfaces'
import cProveedor from '../../../models/catalogo/proveedor_c_model'
import { handleErrorHttp } from '../../../util'

const getAllProveedor = async (req: Request, res: Response) => {
  try {
    const [total, proveedor] = await Promise.all([
      cProveedor.count(),
      cProveedor.findAll(),
    ])

    return res.status(200).json({
      total,
      proveedor,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getProveedor = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const proveedor = await cProveedor.findByPk(id)
    if (!proveedor) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      proveedor,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postProveedor = async (req: Request, res: Response) => {
  const response = req.body as IProveedorC | IProveedorC[]
  try {
    if (Array.isArray(response)) {
      const proveedor = await cProveedor.bulkCreate(response)
      return res.status(200).json({
        proveedor,
      })
    } else {
      const proveedor = await cProveedor.create(response)
      return res.status(200).json({
        proveedor,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putProveedor = async (req: Request, res: Response) => {
  const response = req.body as IProveedorC
  const { id } = req.params

  try {
    const proveedor = await cProveedor.findByPk(id)
    if (!proveedor) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await proveedor.update(response)
    return res.status(200).json({
      proveedor,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteProveedor = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const proveedor = await cProveedor.findByPk(id)
    if (!proveedor) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await proveedor.destroy()
    return res.status(200).json({
      proveedor,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export {
  getAllProveedor,
  getProveedor,
  postProveedor,
  putProveedor,
  deleteProveedor,
}
