import { type NextFunction, type Request, type Response } from 'express'
import { type ObjectSchema } from 'joi'
import { ApiError } from '../helpers/api-error'

export function validateMiddleware (schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body)

    if (validation.error) {
      throw new ApiError('Um ou mais campos são inválidos.', 400)
    }

    next()
  }
}
