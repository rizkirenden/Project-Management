const pool = require("../config/db");

const UserModel = {
  async getAllUser() {
    const query = `SELECT * FROM users ORDER BY id ASC`;
    const { rows } = await pool.query(query);
    return rows;
  },

  async getUserById(id) {
    const query = `SELECT * FROM users WHERE id = $1`;
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },

  async createUser({ name, email, password }) {
    const query = `
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const { rows } = await pool.query(query, [name, email, password]);
    return rows[0];
  },

  async updateUser(id, { name, email, password }) {
    const query = `
      UPDATE users
      SET name = $1, email = $2, password = $3, updated_at = CURRENT_TIMESTAMP
      WHERE id = $4
      RETURNING *
    `;
    const { rows } = await pool.query(query, [name, email, password, id]);
    return rows[0];
  },

  async deleteUser(id) {
    const query = `DELETE FROM users WHERE id = $1 RETURNING *`;
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },
};

module.exports = UserModel;
