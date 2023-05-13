import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'secret'

export const createToken = (payload: any) =>
  sign(payload, JWT_SECRET, { expiresIn: '1h' })

export const verifyToken = (token: string) => verify(token, JWT_SECRET)
