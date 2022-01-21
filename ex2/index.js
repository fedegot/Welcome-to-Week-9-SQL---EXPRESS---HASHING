require("dotenv").config();

const express = require("express");
const app = express();
const connection = require("./connection");
const User = require("./models/user");
const userRouter = require("./routes/user");

const what = app.use(express.json());
console.log(express.json());
app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
  connection.authenticate();
  User.sync({ alter: true });
  console.log("App is onl6ine");
});
