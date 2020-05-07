
import express from 'express'
const router = express.Router()

export default router
    .get("/", (req: express.Request, res: express.Response) => {
      res.send("GET")
    })
    .post("/", (req: express.Request, res: express.Response) => {
      res.send("POST")
    })