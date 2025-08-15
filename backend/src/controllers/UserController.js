const { getAllUser } = require("../services/UserService");

async function getAllUserController(req, res) {
  try {
    const users = await getAllUser();
    return res.status(200).json({
      message: "User Berhasil Ditampilkan",
      data: users,
    });
  } catch (error) {
    console.error("Error Saat Menampilkan User:", error);
    return res.status(500).json({ error: "Terjadi Kesalahan Pada Server" });
  }
}

module.exports = {
  getAllUserController,
};
