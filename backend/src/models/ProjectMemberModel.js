const pool = require("../config/db");

const ProjectMemberModel = {
  async getAllProjectMember() {
    const query = `SELECT * FROM projectmembers`;
    const { rows } = await pool.query(query);
    return rows;
  },
};

module.exports = ProjectMemberModel;
