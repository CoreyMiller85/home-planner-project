const Task = require("../models/task-model");

getTasks = async (req, res) => {
	try {
		await Task.find({}, (err, tasks) => {
			if (err) {
				return res.status(400).json({ success: false, error: err });
			}
			if (!tasks.length) {
				return res
					.status(404)
					.json({ success: false, error: `Movie not found` });
			}
			return res.status(200).json({ success: true, data: tasks });
		});
	} catch (err) {
		console.log(err);
	}
};

createTask = async (req, res) => {
	const body = req.body;
	try {
		if (!body) {
			return res.status(400).json({
				success: false,
				error: "You must provide a movie",
			});
		}

		const task = new Task(body);
		if (!task) {
			return res.status(400).json({ success: false, error: err });
		}
		await task.save();
		res.status(201).json({
			success: true,
			id: task._id,
			message: "Task Created",
		});
	} catch (err) {
		res.status(400).json({
			err,
			message: "Task not created!",
		});
	}
};

deleteTask = async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id);
		if (!task) {
			res.status(404).json({ success: false, error: err });
		}
		res.status(200).send("Deleted");
	} catch (err) {
		return res.status(400).send(err);
	}
};

updateTask = async (req, res) => {
	try {
		const task = await Task.findByIdAndUpdate(req.params.id, req.body);
		await task.save();
		res.send(task);
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = {
	getTasks,
	createTask,
	deleteTask,
	updateTask,
};
