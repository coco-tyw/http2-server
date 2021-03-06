import express from 'express'
import fs from 'fs'
import path from 'path'
import spdy from 'spdy'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import routes from '@/routes/index'

const port = 3000
const option: spdy.server.ServerOptions = {
  key: fs.readFileSync(path.join(__dirname, './keys/private.key')),
  cert: fs.readFileSync(path.join(__dirname, '/keys/server.crt')),
  passphrase: 'password'
}

const app = express()
app.use(compression())
app.use(helmet())
app.use(cors())

routes(app)

spdy.createServer(option, app).listen(port)