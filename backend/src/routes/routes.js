const express = require("express");
const router = express.Router();

const { getAllTaskController } = require("../controllers/TaskController");
const { getAllProjectController } = require("../controllers/ProjectController");
// Task
router.get("/task", getAllTaskController);

// Project
router.get("/project", getAllProjectController);

module.exports = router;
