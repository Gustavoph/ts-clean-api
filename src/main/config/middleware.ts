import { Express } from 'express'
import { bodyParser, cors, contentType } from '../middleware'

export default (app: Express): void => {
  app.use(cors)
  app.use(bodyParser)
  app.use(contentType)
}
