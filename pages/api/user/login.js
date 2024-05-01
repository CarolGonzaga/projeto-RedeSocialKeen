import { withIronSessionApiRoute } from "iron-session/next";

import validate from "../../../lib/middlewares/validation";
import createHandler from "../../../lib/middlewares/nextConnect";
import { ironConfig } from "../../../lib/middlewares/ironSession";
import { login } from "../../../modules/user/user.service";
import { loginSchema } from "../../../modules/user/user.schema";

const handler = createHandler()

handler.post(validate({ body: loginSchema }), async (req, res) => {
  try {
    
    const user = await login(req.body)
    req.session.user = {
      id: user._id,
      user: user.username
    }
    await req.session.save()    
    res.send({ ok: true })
    
  } catch (err) {
    
    return res.status(400).send(err.message)
    
  }
})

export default withIronSessionApiRoute(handler, ironConfig)