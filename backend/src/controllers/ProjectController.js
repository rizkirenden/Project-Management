const { getAllProject } = require("../services/ProjectService");

async function getAllProjectController(req, res) {
  try {
    const projects = await getAllProject();
    return res.status(200).json({
      message: "Project Berhasil Ditampilkan",
      data: projects,
    });
  } catch (error) {
    console.error("Error Saat Menampilkan Project:", error);
    return res.status(500).json({ error: "Terjadi Kesalahan Pada Server" });
  }
}

module.exports = {
  getAllProjectController,
};
