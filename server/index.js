require('dotenv').config();

const cors = require("cors")
const express = require ("express")
const path = require ("path")

const router = require ("./src/routes/routes")
const conecteToDB = require ("./src/data/db.js")

const app = express();


conecteToDB()

app.use(cors())
app.use(express.static(path.join(__dirname, "./src")));
app.use(express.json());
app.use(express.urlencoded());
app.use(router);

const port = process.env.PORT || 3000
app.listen(port, ()=>{console.log(`server http://localhost:${port}/`)})