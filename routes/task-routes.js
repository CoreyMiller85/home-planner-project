const express = require("express");

const router = express.Router();
const taskController = require("../db/contollers/task-controller");

router.get("/task", taskController.getTasks);
router.post("/task", taskController.createTask);
router.delete("/task/:id", taskController.deleteTask);
router.patch("/task/:id", taskController.updateTask);

module.exports = router;
