import { withIronSessionApiRoute } from "iron-session/next";

import validate from "../../../lib/middlewares/validation";
import createHandler from "../../../lib/middlewares/nextConnect";
import { ironConfig } from "../../../lib/middlewares/ironSession";
import { signupUser } from "../../../modules/user/user.service";
import { signupSchema } from "../../../modules/user/user.schema";

const signup = createHandler()
  
signup.post(validate({ body: signupSchema }), async (req, res) => {
    try {
      
      const user = await signupUser(req.body)
      
      req.session.user = {
        id: user._id,
        user: user.username
      }
      await req.session.save()

      res.status(201).json({ ok: true })
    
    } catch (err) {
      if (err.code === 11000) {
        return res.status(400).send({
          code: 11000,
          duplicatedKey: Object.keys(err.keyPattern)[0]
        })
      }
      throw err

    }
})

export default withIronSessionApiRoute(signup, ironConfig)