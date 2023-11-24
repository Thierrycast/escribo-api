import bcrypt from 'bcrypt'
import { type CreateUserDTO, type OutputUserDTO } from '../dtos/user.dto'
import { ApiError } from '../helpers/api-error'
import userModel from '../models/user.model'
import authService from './authService'

async function create (data: CreateUserDTO): Promise<OutputUserDTO> {
  const emailExists = await userModel.verifyEmail(data.email)

  if (emailExists != null) throw new ApiError('E-mail já existente', 409)

  const formattedData = {
    ...data,
    senha: bcrypt.hashSync(data.senha, 10)
  }

  const { nome, email, senha, ...user } = await userModel.create(formattedData)

  const token = await authService.createToken(user.id)

  return {
    ...user,
    ultimo_login: user.data_criacao,
    token
  }
}

export default {
  create
}
