const pool = require("../config/db");

const TaskModel = {
  async getAllTask() {
    const query = `SELECT * FROM tasks ORDER BY id ASC`;
    const { rows } = await pool.query(query);
    return rows;
  },

  async getTaskById(id) {
    const query = `SELECT * FROM tasks WHERE id = $1`;
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },

  async createTask({
    project_id,
    assigned_to,
    title,
    description,
    status,
    due_date,
  }) {
    const query = `
      INSERT INTO tasks (project_id, assigned_to, title, description, status, due_date)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
    const values = [
      project_id,
      assigned_to,
      title,
      description,
      status,
      due_date,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async updateTask(
    id,
    { project_id, assigned_to, title, description, status, due_date }
  ) {
    const query = `
      UPDATE tasks
      SET project_id = $1, assigned_to = $2, title = $3, description = $4, status = $5, due_date = $6, updated_at = CURRENT_TIMESTAMP
      WHERE id = $7
      RETURNING *
    `;
    const values = [
      project_id,
      assigned_to,
      title,
      description,
      status,
      due_date,
      id,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async deleteTask(id) {
    const query = `DELETE FROM tasks WHERE id = $1 RETURNING *`;
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },
};

module.exports = TaskModel;
