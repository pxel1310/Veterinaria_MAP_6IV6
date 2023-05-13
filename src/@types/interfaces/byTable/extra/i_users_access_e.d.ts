import type { IAt } from '../i_at'

interface IUsersAccessE extends IAt {
  id_useacc: string
  correo_useacc: string
  password_useacc: string
  boleta_useacc: number
  api_token_useacc: string
}

export { IUsersAccessE }
