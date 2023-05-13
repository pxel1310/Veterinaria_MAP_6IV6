import type { Response, NextFunction, Request } from 'express'
import jwt from 'jsonwebtoken'

import mUsuario from '../models/maestra/usuario_m_model'

const JWT_SECRET = process.env.JWT_SECRET || ''
const validarJWT = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('x-token')

  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la petición',
    })
  }

  try {
    const { uid } = jwt.verify(token, JWT_SECRET) as { uid: string }

    const user = await mUsuario.findByPk(uid)

    if (!user) {
      return res.status(401).json({
        msg: 'Token no válido - usuario no existe en DB',
      })
    }

    req.body.user = user

    next()
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        msg: 'El token ha expirado',
      })
    }

    console.log(e)

    return res.status(401).json({
      msg: 'Token no válido',
    })
  }
}

export { validarJWT }
