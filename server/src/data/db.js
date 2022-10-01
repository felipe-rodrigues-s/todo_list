const mongoose = require('mongoose');

const urlDataBase = process.env.URL_DATABASE

const connectToDB = async () => {
  await mongoose.connect(
    urlDataBase,
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

module.exports = connectToDB
