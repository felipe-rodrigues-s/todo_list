// import mongoose from 'mongoose';
const mongoose = require('mongoose');

// const mongoose = new Mongoose();

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// export default mongoose.model('TaskSchema', TaskSchema);
 module.exports = mongoose.model('TaskSchema', taskSchema);

