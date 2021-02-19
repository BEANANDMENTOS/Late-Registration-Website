const mongoose = require("mongoose")

const username = "bean_eiei";
const password = "123456bbb";
const dbName = "cs264DB"

const mongo_url = `mongodb+srv://${username}:${password}@cluster0.qezk3.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;
mongoose.connect(mongo_url, { useNewUrlParser: true }).then(
  () => {
    console.log("[success] task 2 : connected to the database ");
  },
  (error) => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);
