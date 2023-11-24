/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from 'express'
import userController from '../controllers/usersController'
import { authMiddleware } from '../middlewares/authMiddleware'

export const userRoutes = Router()

userRoutes.post('/', userController.createUser)

userRoutes.use(authMiddleware)

userRoutes.get('/', (req, res) => {
  return res.send('estou autorizado hehe')
})

userRoutes.put('/:id')
userRoutes.delete('/:id')
