import type { Request, Response } from 'express'
import type { IProductoVentaM } from '../../../@types/interfaces'
import mProductoVenta from '../../../models/maestra/producto_venta_m_model'
import { handleErrorHttp } from '../../../util'

const getAllProductoVenta = async (req: Request, res: Response) => {
  try {
    const [total, productoVenta] = await Promise.all([
      mProductoVenta.count(),
      mProductoVenta.findAll(),
    ])

    return res.status(200).json({
      total,
      productoVenta,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getProductoVenta = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const productoVenta = await mProductoVenta.findByPk(id)
    if (!productoVenta) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      productoVenta,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postProductoVenta = async (req: Request, res: Response) => {
  const response = req.body as IProductoVentaM | IProductoVentaM[]
  try {
    if (Array.isArray(response)) {
      const productoVenta = await mProductoVenta.bulkCreate(response)
      return res.status(200).json({
        productoVenta,
      })
    } else {
      const productoVenta = await mProductoVenta.create(response)
      return res.status(200).json({
        productoVenta,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putProductoVenta = async (req: Request, res: Response) => {
  const response = req.body as IProductoVentaM
  const { id } = req.params

  try {
    const productoVenta = await mProductoVenta.findByPk(id)
    if (!productoVenta) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await productoVenta.update(response)
    return res.status(200).json({
      productoVenta,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteProductoVenta = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const productoVenta = await mProductoVenta.findByPk(id)
    if (!productoVenta) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await productoVenta.destroy()
    return res.status(200).json({
      productoVenta,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export {
  getAllProductoVenta,
  getProductoVenta,
  postProductoVenta,
  putProductoVenta,
  deleteProductoVenta,
}
