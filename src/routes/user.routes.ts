/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from 'express'
import userController from '../controllers/usersController'

export const userRoutes = Router()

userRoutes.post('/', userController.createUser)

userRoutes.get('/')

userRoutes.put('/:id')
userRoutes.delete('/:id')
