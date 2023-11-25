import { type NextFunction, type Request, type Response } from 'express'
import { ApiError } from '../helpers/api-error'
import userModel from '../models/user.model'
import jwt, { type VerifyErrors, type Secret } from 'jsonwebtoken'

interface JwtPayload {
  id: string
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { authorization } = req.headers

  if (!authorization) {
    throw new ApiError('Não autorizado', 401)
  }

  const token = authorization.split(' ')[1]

  const jwtSecret = process.env.JWT_SECRET

  if (!jwtSecret) {
    throw new ApiError('Segredo JWT não configurado', 500)
  }

  jwt.verify(token, jwtSecret as Secret, (error: VerifyErrors | null) => {
    if (error) {
      handleTokenError(error)
    }
  })

  const { id } = jwt.verify(token, process.env.JWT_SECRET ?? '') as JwtPayload

  const user = await userModel.getById(id)

  if (!user) {
    throw new ApiError('Não autorizado', 401)
  }

  const { senha, ...loggedUser } = user

  req.user = loggedUser

  next()
}

const handleTokenError = (error: VerifyErrors): void => {
  if (error.name === 'TokenExpiredError') {
    throw new ApiError('Sessão inválida', 401)
  } else if (error.name === 'JsonWebTokenError') {
    throw new ApiError('Não autorizado', 401)
  } else {
    throw new ApiError('Erro na autenticação', 401)
  }
}
