import taskSchema  from "../models/Task.js";

const getAllTasks = async (req, res) => {
  try {
    // const taskList = await taskSchema.find()
    return res.render("index");
  } catch (err) {
    return res.status(500).send({err: err.message});
  }  
};

const createTask = async (req, res) => {
  const task = req.body.task;

  if (!task) {
    return res.redirect("/home");
  }
  try {
    await taskSchema.create(task);
    return res.redirect("/home");
  } catch (err) {
    return res.status(500).send({err: err.message});
  }
};

export { getAllTasks, createTask };
