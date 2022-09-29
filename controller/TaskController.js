// import TaskSchema from "../models/Task.js";
const TaskSchema = require("../models/Task.js");
let message = "";
let type = "";

const getAllTasks = async (req, res) => {
  try {
    const listTasks = await TaskSchema.find();
    return res.render("index", {
      listTasks,
      task: null,
      taskDelete: null,
      message,
      type,
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;
  if (!task.task) {
    message = "Insira um texto, antes de adicionar a  tarefa";
    type = "danger";
    return res.redirect("/home");
  }
  try {
    await TaskSchema.create(task);
    message = "Tarefa Criada com Sucesso!";
    type = "success";
    return res.redirect("/home");
  } catch (err) {
    return res.redirect("/home");
  }
};

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

const updateOneTask = async (req, res) => {
  try {
    const task = req.body;
    await TaskSchema.updateOne({ _id: req.params.id }, task);
    message = "Tarefa Atualizada com Sucesso!";
    type = "success";
    res.redirect("/home");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteOneTask = async (req, res) => {
  try {
    await TaskSchema.deleteOne({ _id: req.params.id });
    message = "Tarefa apagada com Sucesso!";
    type = "success";
    res.redirect("/home");
  } catch (err) {
    res.status(500).send({ error: error.message });
  }
};

const taskCheck = async (req, res) => {
  try {
    const task = await TaskSchema.findOne({ _id: req.params.id });

    task.check ? (task.check = false) : (task.check = true);

    await TaskSchema.updateOne({ _id: req.params.id }, task);
    return res.redirect("/home");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// export { getAllTasks, createTask };
module.exports = {
  getAllTasks,
  createTask,
  getById,
  updateOneTask,
  deleteOneTask,
  taskCheck,
};
