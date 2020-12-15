const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Task = new Schema(
  {
    title: { type: String, required: true },
    materials: [
      {
        name: String,
      },
    ],
    importance: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tasks", Task);
