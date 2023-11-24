import { Router } from 'express'
import userController from '../controllers/users.controller'
import { authMiddleware } from '../middlewares/auth.middleware'

export const userRoutes = Router()

userRoutes.post('/', userController.createUser)

userRoutes.use(authMiddleware)

userRoutes.get('/', userController.detailUser)

userRoutes.put('/:id', userController.updateUser)

userRoutes.delete('/:id', userController.deleteUser)
