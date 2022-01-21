require("dotenv").config();

const express = require("express");
const app = express();

app.post("/", function (req, res) {
  res.status(200).send("POST requesto tro the homepage");
});
app.post("/", function (req, res) {
  res.status(200).send("POST requesto tro the homepage");
});

app.get("/", (req, res) => res.json({ username: "Flavio" }));

app.listen(process.env.HTTP_PORT, () => console.log("APP ONLINE"));

// 1) Create a new route called "hello" that sends the message "hello" and test it in insomnia
// 2) Create a new route called "goodbye" that sends the message "goodbye" and test it in insomnia
// 3) Try sending some json data back in the response, create a new route (choose what you want to call it) but this time using the json method, not send. Use the object `{msg: "Hello There"}` test it in insomnia
// 4) Write an npm script to start the web server so that it'll start with `npm start`
