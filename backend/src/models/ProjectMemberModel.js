const pool = require("../config/db");

const ProjectMemberModel = {
  async getAllProjectMember() {
    const query = `SELECT * FROM projectmembers ORDER BY id ASC`;
    const { rows } = await pool.query(query);
    return rows;
  },

  async getProjectMemberById(id) {
    const query = `SELECT * FROM projectmembers WHERE id = $1`;
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },

  async createProjectMember({ project_id, user_id, role }) {
    const query = `
      INSERT INTO projectmembers (project_id, user_id, role)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const values = [project_id, user_id, role || "member"];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async updateProjectMember(id, { project_id, user_id, role }) {
    const query = `
      UPDATE projectmembers
      SET project_id = $1, user_id = $2, role = $3, updated_at = CURRENT_TIMESTAMP
      WHERE id = $4
      RETURNING *
    `;
    const values = [project_id, user_id, role, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async deleteProjectMember(id) {
    const query = `DELETE FROM projectmembers WHERE id = $1 RETURNING *`;
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },
};

module.exports = ProjectMemberModel;
