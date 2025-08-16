const pool = require("../config/db");

const ProjectModel = {
  async getAllProject() {
    const query = `SELECT * FROM projects ORDER BY id ASC`;
    const { rows } = await pool.query(query);
    return rows;
  },

  async getProjectById(id) {
    const query = `SELECT * FROM projects WHERE id = $1`;
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },

  async createProject({ name, description, owner_id }) {
    const query = `
      INSERT INTO projects (name, description, owner_id)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const { rows } = await pool.query(query, [name, description, owner_id]);
    return rows[0];
  },

  async updateProject(id, { name, description, owner_id }) {
    const query = `
      UPDATE projects
      SET name = $1, description = $2, owner_id = $3, updated_at = CURRENT_TIMESTAMP
      WHERE id = $4
      RETURNING *
    `;
    const { rows } = await pool.query(query, [name, description, owner_id, id]);
    return rows[0];
  },

  async deleteProject(id) {
    const query = `DELETE FROM projects WHERE id = $1 RETURNING *`;
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },
};

module.exports = ProjectModel;
