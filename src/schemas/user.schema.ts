import Joi from 'joi'

export const createUserSchema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).required(),
  telefones: Joi.array().items(
    Joi.object({
      numero: Joi.string().required(),
      ddd: Joi.string().required()
    })
  )
})
