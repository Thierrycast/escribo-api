import { PrismaClient, type User, type Telefone } from '@prisma/client'

const prisma = new PrismaClient()

export { prisma, type User, type Telefone }
