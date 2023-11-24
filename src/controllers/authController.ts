/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Request, type Response } from 'express'
import authService from '../services/authService'

export const login = async (req: Request, res: Response) => {
  const data = req.body
  const response = await authService.login(data)

  return res.status(200).json(response)
}
