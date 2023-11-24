import bcrypt from 'bcrypt'
import { type allDataUserDTO, type CreateUserDTO, type OutputUserDTO } from '../dtos/user.dto'
import { ApiError } from '../helpers/api-error'
import userModel from '../models/user.model'
import authService from './authService'

async function create (data: CreateUserDTO): Promise<OutputUserDTO> {
  const emailExists = await userModel.getByEmail(data.email)

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

async function detailUser (id: string): Promise<allDataUserDTO> {
  const user = await userModel.getAllData(id)

  if (!user) {
    throw new ApiError('Usuario não encontrado', 404)
  }

  const { senha, ...formattedData } = user

  return formattedData
}

export default {
  create,
  detailUser
}
