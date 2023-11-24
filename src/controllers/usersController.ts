/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Request, type Response } from 'express'
import userServices from '../services/userService'
import { type OutputUserDTO, type CreateUserDTO } from '../dtos/user.dto'

const createUser = async (req: Request, res: Response) => {
  const data = req.body as CreateUserDTO
  const response: OutputUserDTO = await userServices.create(data)
  return res.status(201).json(response)
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
