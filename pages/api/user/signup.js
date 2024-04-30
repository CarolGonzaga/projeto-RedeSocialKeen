import nextConnect from "next-connect";
import Joi from "joi";
import validate from "../../../lib/middlewares/validation";
import { signupUser } from "../../../modules/user/user.service";

const postSchema = Joi.object({
  username: Joi.string().required().max(30),
  email: Joi.string().email().required().max(100),
  password: Joi.string().required().max(50).min(8),
})

const signup = nextConnect()
  .post(validate({ body: postSchema }), (req, res) => {
    signupUser(req.body)
    res.status(200).json({ teste: "ok" })
  })

export default signup