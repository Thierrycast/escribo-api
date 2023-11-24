import { Router } from 'express'
import userController from '../controllers/usersController'

export const userRoutes = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
userRoutes.post('/', userController.createUser)

userRoutes.get('/')

userRoutes.put('/:id')
userRoutes.delete('/:id')
