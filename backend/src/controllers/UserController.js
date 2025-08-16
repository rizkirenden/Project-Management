const UserService = require("../services/UserService");

async function getAllUser(req, res) {
  try {
    const users = await UserService.getAllUser();
    return res.status(200).json({
      message: "User Berhasil Ditampilkan",
      data: users,
    });
  } catch (error) {
    console.error("Error Saat Menampilkan User:", error);
    return res.status(500).json({ error: "Terjadi Kesalahan Pada Server" });
  }
}

async function getUserById(req, res) {
  try {
    const user = await UserService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function createUser(req, res) {
  try {
    const newUser = await UserService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateUser(req, res) {
  try {
    const updatedUser = await UserService.updateUser(req.params.id, req.body);
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deleteUser(req, res) {
  try {
    const deletedUser = await UserService.deleteUser(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
