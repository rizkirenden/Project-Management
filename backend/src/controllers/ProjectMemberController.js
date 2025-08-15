const { getAllProjectMember } = require("../services/ProjectMemberService");

async function getAllProjectMemberController(req, res) {
  try {
    const projectmembers = await getAllProjectMember();
    return res.status(200).json({
      message: "Project Member Berhasil Ditampilkan",
      data: projectmembers,
    });
  } catch (error) {
    console.error("Error Saat Menampilkan Project:", error);
    return res.status(500).json({ error: "Terjadi Kesalahan Pada Server" });
  }
}

module.exports = {
  getAllProjectMemberController,
};
