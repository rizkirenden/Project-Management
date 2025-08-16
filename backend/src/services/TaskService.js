const TaskModel = require("../models/TaskModel");

const TaskService = {
  async getAllTask() {
    return await TaskModel.getAllTask();
  },

  async getTaskById(id) {
    return await TaskModel.getTaskById(id);
  },

  async createTask(data) {
    return await TaskModel.createTask(data);
  },

  async updateTask(id, data) {
    return await TaskModel.updateTask(id, data);
  },

  async deleteTask(id) {
    return await TaskModel.deleteTask(id);
  },
};

module.exports = TaskService;
