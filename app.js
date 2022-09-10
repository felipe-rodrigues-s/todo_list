const express = require ("express")
const path = require ("path")
const router = require ("./routes/routes.js")
const conectToDB = require ("./data/db.js")


const app = express();
conectToDB()

app.use(express.static(path.join(__dirname, "./public")));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded());
app.use(router);

module.exports = app
