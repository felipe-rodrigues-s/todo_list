import express from "express";
import path from "path";
import { router } from "./routes/routes.js";
import { conectToDB } from "./data/db.js";

conectToDB()
const app = express();

app.use(express.static(path.join("./src/public")));
app.set('views', path.join('./src/views'));
app.set("view engine", "ejs");
app.use(express.json());
app.use(router);

export { app };
