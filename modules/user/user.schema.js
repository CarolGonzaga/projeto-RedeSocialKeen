import Joi from "joi";

export const signupSchema = Joi.object({
  username: Joi.string().required().max(30),
  email: Joi.string().email({ tlds: { allow: false } }).required().max(100),
  password: Joi.string().required().max(50).min(8)
})