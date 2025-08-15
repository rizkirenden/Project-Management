const pool = require("../config/db");

const UserModel = {
  async getAllUser() {
    const query = `SELECT * FROM users`;
    const { rows } = await pool.query(query);
    return rows;
  },
};

module.exports = UserModel;
