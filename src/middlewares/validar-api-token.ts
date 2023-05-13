import type { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import eUsersAccess from '../models/extra/users_access_e_model'

const JWT_SECRET = process.env.JWT_SECRET || ''
const validarApiToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('x-token')

  if (!token) {
    return res.status(401).json({
      msg: 'No API Token dentro del header',
    })
  }

  try {
    const { uid } = jwt.verify(token, JWT_SECRET) as { uid: string }

    const user = await eUsersAccess.findByPk(uid)

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
        msg: 'El API Token ha expirado',
      })
    }

    console.log(e)

    return res.status(401).json({
      msg: 'Token no válido',
    })
  }
}

export { validarApiToken }
