const ProjectModel = require("../models/ProjectModel");

const ProjectService = {
  async getAllProject() {
    return await ProjectModel.getAllProject();
  },

  async getProjectById(id) {
    return await ProjectModel.getProjectById(id);
  },

  async createProject(data) {
    return await ProjectModel.createProject(data);
  },

  async updateProject(id, data) {
    return await ProjectModel.updateProject(id, data);
  },

  async deleteProject(id) {
    return await ProjectModel.deleteProject(id);
  },
};

module.exports = ProjectService;
