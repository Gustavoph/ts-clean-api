import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeSignupController } from '../factories'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignupController()))
}
