import { type Request, type Response } from 'express'
import { type User } from '../database/prisma'
import userServices from '../services/userService'
import { type CreateUserDTO } from '../dtos/user.dto'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createUser = async (req: Request, res: Response) => {
  const data = req.body as CreateUserDTO

  try {
    const response: User = await userServices.create(data)

    return res.status(201).json(response)
  } catch (error) {
    console.error(error)
    return res.status(400).json(error)
  }
}

const listUsers = async (req: Request, res: Response): Promise<void> => {

}

const detailUser = async (req: Request, res: Response): Promise<void> => {

}

const updateUser = async (req: Request, res: Response): Promise<void> => {

}

const deleteUser = async (req: Request, res: Response): Promise<void> => {

}

export default {
  createUser,
  listUsers,
  detailUser,
  updateUser,
  deleteUser
}
