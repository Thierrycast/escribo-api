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

async function getByEmail (email: string): Promise<User | null> {
  const user = await prisma.user.findFirst({
    where: { email }
  })

  return user
}

async function getById (id: string): Promise<User | null> {
  const user = await prisma.user.findFirst({
    where: { id }
  })

  return user
}

async function udateLastLogin (id: string): Promise<void> {
  await prisma.user.update({
    data: {
      ultimo_login: new Date()
    },
    where: {
      id
    }
  })
}

export default {
  create,
  udateLastLogin,
  getByEmail,
  getById
}
