const express = require("express");
const router = express.Router();

const { getAllTaskController } = require("../controllers/TaskController");
const { getAllProjectController } = require("../controllers/ProjectController");
const {
  getAllProjectMemberController,
} = require("../controllers/ProjectMemberController");
const { getAllUserController } = require("../controllers/UserController");

// Task
router.get("/task", getAllTaskController);

// Project
router.get("/project", getAllProjectController);

// Project Member
router.get("/projectmember", getAllProjectMemberController);

// User
router.get("/user", getAllUserController);

module.exports = router;
