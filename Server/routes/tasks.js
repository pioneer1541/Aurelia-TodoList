const express = require("express");
const router = express.Router();
const task = require("../middleware/task");

router.get("/", task.retrieveTasks, (req, res) => {
  res.status(200).json(req.tasks);
});

router.post("/task/new-task", task.createTask, (req, res) => {
  res.status(200).send(req.task);
});

router.post("/task/update-task", task.updateTask, (req, res) => {
  res.status(200).send(req.task);
});
router.delete("/task/delete-task", task.deleteTask, (req, res) => {
  res.status(200).send(req.task);
});

module.exports = router;
