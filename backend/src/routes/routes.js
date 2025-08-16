const express = require("express");
const router = express.Router();

// Import Controllers
const TaskController = require("../controllers/TaskController");
const ProjectController = require("../controllers/ProjectController");
const ProjectMemberController = require("../controllers/ProjectMemberController");
const UserController = require("../controllers/UserController");

// ---------------- Task Routes ----------------
router.get("/tasks", TaskController.getAllTask);
router.get("/tasks/:id", TaskController.getTaskById);
router.post("/tasks", TaskController.createTask);
router.put("/tasks/:id", TaskController.updateTask);
router.delete("/tasks/:id", TaskController.deleteTask);

// ---------------- Project Routes ----------------
router.get("/projects", ProjectController.getAllProject);
router.get("/projects/:id", ProjectController.getProjectById);
router.post("/projects", ProjectController.createProject);
router.put("/projects/:id", ProjectController.updateProject);
router.delete("/projects/:id", ProjectController.deleteProject);

// ---------------- Project Member Routes ----------------
router.get("/projectmembers", ProjectMemberController.getAllProjectMember);
router.get("/projectmembers/:id", ProjectMemberController.getProjectMemberById);
router.post("/projectmembers", ProjectMemberController.createProjectMember);
router.put("/projectmembers/:id", ProjectMemberController.updateProjectMember);
router.delete(
  "/projectmembers/:id",
  ProjectMemberController.deleteProjectMember
);

// ---------------- User Routes ----------------
router.get("/users", UserController.getAllUser);
router.get("/users/:id", UserController.getUserById);
router.post("/users", UserController.createUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;
