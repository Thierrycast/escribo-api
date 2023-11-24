import { type User, prisma } from '../database/prisma'
import { type CreateUserDTO } from '../dtos/user.dto'

async function create (data: CreateUserDTO): Promise<User> {
  const { nome, email, senha } = data

  const user = await prisma.user.create({
    data: {
      nome,
      email,
      senha
    }
  })

  return user
}

async function verifyEmail (email: string): Promise<User | null> {
  const user = await prisma.user.findFirst({
    where: { email }
  })

  return user
}

export default {
  create,
  verifyEmail
}
