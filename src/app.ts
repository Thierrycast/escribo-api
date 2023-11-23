import cors from 'cors'
import express, { type Application } from 'express'
import { userRoutes } from './routes/user.routes'
import { authRoutes } from './routes/auth.routes'

export const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/usuario', userRoutes)
app.use('/login', authRoutes)
