// import TaskSchema from "../models/Task.js";
const TaskSchema = require("../../models/Schema.js");
let message = "";
let type = "";



const getById = async (req, res) => {
  try {
    const listTasks = await TaskSchema.find();

    if (req.params.method == "update") {
      const task = await TaskSchema.findOne({ _id: req.params.id });
      res.render("index", { task, listTasks, taskDelete: null, message, type });
    } else {
      const taskDelete = await TaskSchema.findOne({ _id: req.params.id });
      res.render("index", { task: null, listTasks, taskDelete, message, type });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getById,
};
