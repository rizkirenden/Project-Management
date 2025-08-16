const TaskService = require("../services/TaskService");

const TaskController = {
  async getAllTask(req, res) {
    try {
      const tasks = await TaskService.getAllTask();
      res
        .status(200)
        .json({ message: "Task berhasil ditampilkan", data: tasks });
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },

  async getTaskById(req, res) {
    try {
      const task = await TaskService.getTaskById(req.params.id);
      if (!task)
        return res.status(404).json({ message: "Task tidak ditemukan" });
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },

  async createTask(req, res) {
    try {
      const newTask = await TaskService.createTask(req.body);
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },

  async updateTask(req, res) {
    try {
      const updatedTask = await TaskService.updateTask(req.params.id, req.body);
      if (!updatedTask)
        return res.status(404).json({ message: "Task tidak ditemukan" });
      res.json(updatedTask);
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },

  async deleteTask(req, res) {
    try {
      const deletedTask = await TaskService.deleteTask(req.params.id);
      if (!deletedTask)
        return res.status(404).json({ message: "Task tidak ditemukan" });
      res.json({ message: "Task berhasil dihapus" });
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },
};

module.exports = TaskController;
