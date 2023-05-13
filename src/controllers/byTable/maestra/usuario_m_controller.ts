import type { Request, Response } from 'express'
import type { IUsuarioM } from '../../../@types/interfaces'
import mUsuario from '../../../models/maestra/usuario_m_model'
import { handleErrorHttp } from '../../../util'

const getAllUsuario = async (req: Request, res: Response) => {
  try {
    const [total, usuario] = await Promise.all([
      mUsuario.count(),
      mUsuario.findAll(),
    ])

    return res.status(200).json({
      total,
      usuario,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const usuario = await mUsuario.findByPk(id)
    if (!usuario) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    return res.status(200).json({
      usuario,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const postUsuario = async (req: Request, res: Response) => {
  const response = req.body as IUsuarioM | IUsuarioM[]
  try {
    if (Array.isArray(response)) {
      const usuario = await mUsuario.bulkCreate(response)
      return res.status(200).json({
        usuario,
      })
    } else {
      const usuario = await mUsuario.create(response)
      return res.status(200).json({
        usuario,
      })
    }
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const putUsuario = async (req: Request, res: Response) => {
  const response = req.body as IUsuarioM
  const { id } = req.params

  try {
    const usuario = await mUsuario.findByPk(id)
    if (!usuario) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await usuario.update(response)
    return res.status(200).json({
      usuario,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const usuario = await mUsuario.findByPk(id)
    if (!usuario) {
      return res.status(404).json({
        msg: 'No existe el registro',
      })
    }

    await usuario.destroy()
    return res.status(200).json({
      usuario,
    })
  } catch (e) {
    return handleErrorHttp(req, res, e)
  }
}

export { getAllUsuario, getUsuario, postUsuario, putUsuario, deleteUsuario }
