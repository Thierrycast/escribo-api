import 'express-async-errors'
import cors from 'cors'
import express, { type Application } from 'express'
import { userRoutes } from './routes/user.routes'
import { authRoutes } from './routes/auth.routes'
import { errorMiddleware } from './middlewares/errorMiddleware'

export const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/usuario', userRoutes)
app.use('/login', authRoutes)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.use(errorMiddleware)
