import { type CreateUserDTO, type OutputUserDTO } from '../dtos/user.dto'
import { ApiError } from '../helpers/api-error'
import userModel from '../models/user.model'

async function create (data: CreateUserDTO): Promise<OutputUserDTO> {
  const emailExists = await userModel.verifyEmail(data.email)

  if (emailExists != null) {
    throw new ApiError('E-mail já existente', 409)
  }

  const { nome, email, senha, ...user } = await userModel.create(data)

  return user
}

export default {
  create
}
