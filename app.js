import express from 'express'
import { router } from './routes/routes.js'

const app = express()

app.set("view engine", "ejs")
app.use(express.json()) 
app.use(router)

export {app}
