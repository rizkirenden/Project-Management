const pool = require("../config/db");

const ProjectModel = {
  async getAllProject() {
    const query = `SELECT * FROM projects`;
    const { rows } = await pool.query(query);
    return rows;
  },
};

module.exports = ProjectModel;
