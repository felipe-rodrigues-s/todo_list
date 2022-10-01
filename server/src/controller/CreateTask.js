const TaskSchema = require("../../models/Schema.js");

const createTask = async (req, res) => {
  const taskCreate = req.body;
  try {
    await TaskSchema.create(taskCreate);
    return res.json(taskCreate);
  } catch (err) {
    return res.redirect("/home");
  }
};

module.exports = createTask