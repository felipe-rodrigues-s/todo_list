const TaskSchema = require("../../models/Schema.js");

const getAllTasks = async (req, res) => {
  try {
    const listTasks = await TaskSchema.find();
    return res.json(listTasks);
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = getAllTasks