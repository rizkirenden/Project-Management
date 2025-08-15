const TaskModel = require("../models/TaskModel");

async function getAllTask() {
  return await TaskModel.getAllTask();
}

module.exports = {
  getAllTask,
};
