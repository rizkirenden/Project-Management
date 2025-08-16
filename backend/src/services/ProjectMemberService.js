const ProjectMemberModel = require("../models/ProjectMemberModel");

const ProjectMemberService = {
  async getAllProjectMember() {
    return await ProjectMemberModel.getAllProjectMember();
  },

  async getProjectMemberById(id) {
    return await ProjectMemberModel.getProjectMemberById(id);
  },

  async createProjectMember(data) {
    return await ProjectMemberModel.createProjectMember(data);
  },

  async updateProjectMember(id, data) {
    return await ProjectMemberModel.updateProjectMember(id, data);
  },

  async deleteProjectMember(id) {
    return await ProjectMemberModel.deleteProjectMember(id);
  },
};

module.exports = ProjectMemberService;
