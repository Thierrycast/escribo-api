import { type User, prisma } from '../database/prisma'
import { type CreateUserDTO } from '../dtos/user.dto'

async function create (data: CreateUserDTO): Promise<User> {
  const { nome, email, senha, telefones } = data

  const user = await prisma.user.create({
    data: {
      nome,
      email,
      senha,
      telefones: {
        create: telefones.map((telefone) => ({
          numero: telefone.numero,
          ddd: telefone.ddd
        }))
      }
    }
  })

  return user
}

async function getAllData (id: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    include: {
      telefones: true
    },
    where: {
      id
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

async function updateLastLogin (id: string): Promise<void> {
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
  getAllData,
  updateLastLogin,
  getByEmail,
  getById
}
