import express from 'express'
import { Router } from 'express';
import { AdminMiddleware } from './External/Middlewares/adminMiddleware';
import routes from './External/Routes'
require('dotenv').config()
var cors = require('cors')

const app = express()
const port = process.env.PORT
app.use(cors())

const router = Router()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ "message": `Wellcome, see all the methods in: (i will put the url here later)<(O-O)>${port}` })
})

app.post('/', AdminMiddleware, (req, res) => {
    //console.log('middleware passou')
    res.status(200).json({ "auth": true })
})
app.use(routes)

app.listen(port, () => {
    console.log(`༼ つ ◕_◕ ༽つ Start at http://localhost:${port}`)
})