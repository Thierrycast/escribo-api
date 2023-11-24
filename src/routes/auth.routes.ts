import { Router } from 'express'
import { login } from '../controllers/authController'

export const authRoutes = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
authRoutes.post('/', login)
