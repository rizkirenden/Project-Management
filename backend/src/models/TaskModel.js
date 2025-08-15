const pool = require("../config/db");

const TaskModel = {
  async getAllTask() {
    const query = `SELECT * FROM tasks`;
    const { rows } = await pool.query(query);
    return rows;
  },
};

module.exports = TaskModel;
