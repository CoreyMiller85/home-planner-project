const mongoose = require("mongoose");
const { config } = require("dotenv");

config();
mongoose
	.connect(
		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fr7qc.mongodb.net/homeTasks?retryWrites=true&w=majority`,
		{ useNewUrlParser: true }
	)
	.catch((e) => {
		console.error("Connection error", e.message);
	});

const db = mongoose.connection;

module.exports = db;
