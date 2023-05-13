import bcrypt from 'bcryptjs'

export const encrypt = (password: string): string =>
  bcrypt.hashSync(password, 10)

export const compare = (password: string, hash: string): boolean =>
  bcrypt.compareSync(password, hash)
