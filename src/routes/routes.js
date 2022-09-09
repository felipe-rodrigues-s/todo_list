import { Router } from "express";
import {getAllTasks} from "../controller/TaskController.js"

const router = Router();

router.get('/home', getAllTasks)

export { router };