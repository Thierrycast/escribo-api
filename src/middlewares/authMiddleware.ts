import { type NextFunction, type Request, type Response } from 'express'
import { ApiError } from '../helpers/api-error'
import userModel from '../models/user.model'
import jwt from 'jsonwebtoken'

interface JwtPayload {
  id: string
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { authorization } = req.headers

  if (authorization == null) {
    throw new ApiError('Não autorizado', 401)
  }

  const token = authorization.split(' ')[1]

  const { id } = jwt.verify(token, process.env.JWT_SECRET ?? '') as JwtPayload

  const user = await userModel.getById(id)

  if (user == null) {
    throw new ApiError('Não autorizado', 401)
  }

  const { senha, ...loggedUser } = user

  req.user = loggedUser

  next()
}
