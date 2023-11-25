import { type Request, type Response, type NextFunction } from 'express'
import { type ApiError } from '../helpers/api-error'

interface ErrorResponse {
  message: string
}

export const errorMiddleware = async (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction

): Promise<Response<ErrorResponse>> => {
  const statusCode = error.statusCode ?? 500
  const message = (error.statusCode != null) ? error.message : 'Internal Server Error'
  return res.status(statusCode).json({ mensagem: message })
}
