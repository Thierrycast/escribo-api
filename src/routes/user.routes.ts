import { Router } from 'express'
import userController from '../controllers/users.controller'
import { authMiddleware } from '../middlewares/auth.middleware'
import { validateMiddleware } from '../middlewares/validate.middleware'
import { createUserSchema } from '../schemas/user.schema'

export const userRoutes = Router()

userRoutes.post('/', validateMiddleware(createUserSchema), userController.createUser)

userRoutes.use(authMiddleware)

userRoutes.get('/', userController.detailUser)

userRoutes.put('/:id', userController.updateUser)

userRoutes.delete('/:id', userController.deleteUser)
