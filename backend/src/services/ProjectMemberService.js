const ProjectMemberModel = require("../models/ProjectMemberModel");

async function getAllProjectMember() {
  return await ProjectMemberModel.getAllProjectMember();
}

module.exports = {
  getAllProjectMember,
};
