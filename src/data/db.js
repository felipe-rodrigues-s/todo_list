import {Mongoose} from "mongoose";

const conectToDB = () => {
  const db = new Mongoose();
  // db.connect(process.env.MONGO_URI);
   db.connect(
    `mongodb+srv://root:admin@todolist.ags2sea.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
    .then(() => {
      console.log("Connected to Mongo");
    })
    .catch((err) => {
      console.log("Error connecting");
    });
};

export {conectToDB}
