import 'express-async-errors'
import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import { userRoutes } from './routes/user.routes'
import { authRoutes } from './routes/auth.routes'
import { errorMiddleware } from './middlewares/error.middleware'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/usuario', userRoutes)
app.use('/login', authRoutes)

app.use(errorMiddleware)

export default app
