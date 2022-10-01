const TaskSchema = require("../../models/Schema.js");

const deleteTask = async (req, res) => {
	const data = req.params
  try {
    await TaskSchema.deleteOne({ _id: data.id });
    res.json({
			success: 'excluída com sucesso'
		});
  } catch (err) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = deleteTask