import root from './root'
import { Express } from 'express'

export default function (app: Express) {
  app.use("/", root)
}