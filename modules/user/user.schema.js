import Joi from "joi";

export const signupSchema = Joi.object({
  username: Joi.string().required()
    .max(30).message('O usuário deve ter no máximo {{#limit}} caracteres.'),
  email: Joi.string().email({ tlds: { allow: false } }).required()
    .max(100).message('O e-mail deve ter no máximo {{#limit}} caracteres.'),
  password: Joi.string().required()
    .max(50).message('A senha deve ter no máximo {{#limit}} caracteres.')
    .min(8).message('A senha deve ter no mínimo {{#limit}} caracteres.')
})