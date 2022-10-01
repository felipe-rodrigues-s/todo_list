const TaskSchema = require("../../models/Schema.js");

const updateOneTask = async (req, res) => {
  try {
    const updateTask = req.body;
    await TaskSchema.updateOne({ _id: req.params.id }, updateTask);
    res.json(updateTask);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = updateOneTask