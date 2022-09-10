// import TaskSchema from "../models/Task.js";
const TaskSchema = require("../models/Task.js")

const getAllTasks = async (req, res) => {
  const listTasks = await TaskSchema.find()
  try {
    return res.render("index", {listTasks});
  } catch (err) {
    return res.status(500).send({err: err.message});
  }  
};

const createTask = async (req, res) => {
  const task = req.body;
   if (!task) {
     return res.redirect("/home");
   }
  try {
    await TaskSchema.create(task);
    return res.redirect("/home");
  } catch (err) {
    return res.status(500).send({err: err.message});
  }
};

// export { getAllTasks, createTask };
module.exports = { getAllTasks, createTask }
