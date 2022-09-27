// import TaskSchema from "../models/Task.js";
const TaskSchema = require("../models/Task.js");

const getAllTasks = async (req, res) => {
  const listTasks = await TaskSchema.find();
  try {
    return res.render("index", { listTasks, task: null });
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;
  if (task == null) {
    return res.redirect("/home");
  }
  try {
    await TaskSchema.create(task);
    return res.redirect("/home");
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const task = await TaskSchema.findOne({ _id: req.params.id });
    const listTasks = await TaskSchema.find();
    res.render("index", { task, listTasks });
  } catch (error) {
    return res.status(500).send({ err: err.message });
  }
};

const updateOneTask = async (req, res) => {
  try {
    const task = req.body;
    await TaskSchema.updateOne({ _id: req.params.id }, task);
    res.redirect("/home");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
// export { getAllTasks, createTask };
module.exports = { getAllTasks, createTask, getById, updateOneTask };
