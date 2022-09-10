// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const conectToDB = async () => {
  //  const db = new mongoose();
  // db.connect(process.env.MONGO_URI);
  await mongoose.connect(
    `mongodb+srv://root:admin@todo.aikvoaz.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(() => {
      console.log("Connected to Mongo");
    })
    .catch((err) => {
      console.log("Error connecting " + err.message);
    });
};

module.exports = conectToDB
