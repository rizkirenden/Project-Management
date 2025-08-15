const ProjectModel = require("../models/ProjectModel");

async function getAllProject() {
  return await ProjectModel.getAllProject();
}

module.exports = {
  getAllProject,
};
