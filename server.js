const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const db = require("./db");
const taskRouter = require("./routes/task-routes");
const path = require("path");
const bodyParser = require("body-parser");
const Task = require("./db/models/task-model");

const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));

// app.use(bodyParser.urlencoded({ extended: true }));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());

app.use(bodyParser.json());

app.use("/api", taskRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build"));
});

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
