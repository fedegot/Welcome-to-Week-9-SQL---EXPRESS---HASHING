require("dotenv").config();

const express = require("express");
const app = express();

const dataRouter = require("./routes/data");
const marketingRouter = require("./routes/marketing");
const indexRouter = require("./routes/index");
const errorRouter = require("./routes/error");
const accountingRouter = require("./routes/accounting");

app.use(express.json());
app.use("/", indexRouter);
app.use("/accounting", accountingRouter);
app.use("/marketing", marketingRouter);
app.use("/data", dataRouter);
app.use("*", errorRouter);

// app.get("/data", (req, res) =>
//   res.status(200).json({ msg: "Hello drom data" })
// );

// app.get("/hello", (req, res) => res.status(200).send("Hello World"));
// app.get("*", (req, res) => res.status(404).send("Not Found"));

// app.get("/", (req, res) => {
//   console.log(req.queries);
// });

app.listen(process.env.HTTP_PORT, () => console.log("APP ONLINE"));
