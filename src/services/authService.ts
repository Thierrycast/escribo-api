import jwt from 'jsonwebtoken'
import { ApiError } from '../helpers/api-error'

async function createToken (id: string): Promise<string> {
  if (process.env.JWT_SECRET == null) {
    throw new ApiError('JWT_SECRET not defined in the environment', 500)
  }

  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 1800 })
}

export default {
  createToken
}
