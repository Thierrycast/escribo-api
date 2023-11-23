import { type User } from '../database/prisma'
import { type CreateUserDTO } from '../dtos/user.dto'
import userModel from '../models/user.model'

async function create (data: CreateUserDTO): Promise<User> {
  const user = await userModel.create(data)

  return user
}

export default {
  create
}
