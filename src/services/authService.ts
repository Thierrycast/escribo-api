import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { ApiError } from '../helpers/api-error'
import { type inputLoginDTO } from '../dtos/auth.dto'
import userModel from '../models/user.model'
import { type OutputUserDTO } from '../dtos/user.dto'

async function createToken (id: string): Promise<string> {
  if (process.env.JWT_SECRET == null) {
    throw new ApiError('JWT_SECRET not defined in the environment', 500)
  }

  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 1800 })
}

async function login (data: inputLoginDTO): Promise<OutputUserDTO> {
  const user = await userModel.getByEmail(data.email)

  if (user == null) throw new ApiError('Usuario e/ou senha inválidos', 400)

  const passwordVerified = bcrypt.compareSync(data.senha, user.senha)

  if (!passwordVerified) throw new ApiError('Usuario e/ou senha inválidos', 400)

  const token = await createToken(user.id)

  const response = {
    id: user.id,
    data_criacao: user.data_criacao,
    data_atualizacao: user.data_atualizacao,
    ultimo_login: user.ultimo_login,
    token
  }

  await userModel.udateLastLogin(user.id)

  return response
}

export default {
  createToken,
  login
}
