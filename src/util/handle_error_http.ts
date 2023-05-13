import { Response, Request } from 'express'

export const handleErrorHttp = (req: Request, res: Response, error: any) => {
  console.log(error)
  return res.status(500).json({
    msg: 'Error inesperado',
  })
}
