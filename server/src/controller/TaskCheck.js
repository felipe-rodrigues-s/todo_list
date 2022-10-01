const TaskSchema = require("../../models/Schema.js");

const taskCheck = async (req, res) => {
	const data = req.body
  try {
    const task = await TaskSchema.findOne({ _id: req.params.id});		

    task.check = data.check

    await TaskSchema.updateOne({ _id: req.params.id }, task);
    return res.json({
      task: task,
      success: "check com sucesso",
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = taskCheck;
