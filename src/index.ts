import express from 'express'
import fs from 'fs'
import path from 'path'
import spdy from 'spdy'

const port = 3000
const option: spdy.server.ServerOptions = {
  key: fs.readFileSync(path.join(__dirname, './keys/private.key')),
  cert: fs.readFileSync(path.join(__dirname, '/keys/server.crt')),
  passphrase: 'password'
}

const app = express()
app.get('/', (req, res) => res.send('Hello World!'))

spdy.createServer(option, app).listen(port)