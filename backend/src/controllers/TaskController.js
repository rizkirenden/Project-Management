const { getAllTask } = require("../services/TaskService");

async function getAllTaskController(req, res) {
  try {
    const tasks = await getAllTask();
    return res.status(200).json({
      message: "Task Berhasil Ditampilkan",
      data: tasks,
    });
  } catch (error) {
    console.error("Error Saat Menampilkan Task:", error);
    return res.status(500).json({ error: "Terjadi Kesalahan Pada Server" });
  }
}

module.exports = {
  getAllTaskController,
};
