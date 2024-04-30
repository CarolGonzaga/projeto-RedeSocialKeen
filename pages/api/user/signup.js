import Joi from "joi";
import validate from "../../../lib/middlewares/validation";
import createHandler from "../../../lib/middlewares/nextConnect";
import { signupUser } from "../../../modules/user/user.service";

const postSchema = Joi.object({
  username: Joi.string().required().max(30),
  email: Joi.string().email().required().max(100),
  password: Joi.string().required().max(50).min(8),
})

const signup = createHandler()
  
signup.post(validate({ body: postSchema }), async (req, res) => {
    try {
      const user = await signupUser(req.body)
      res.status(201).json(user)
    
    } catch (err) {
      console.log(err);
      throw err
    }
})

export default signup