const ProjectMemberService = require("../services/ProjectMemberService");

const ProjectMemberController = {
  async getAllProjectMember(req, res) {
    try {
      const members = await ProjectMemberService.getAllProjectMember();
      res
        .status(200)
        .json({
          message: "Project member berhasil ditampilkan",
          data: members,
        });
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },

  async getProjectMemberById(req, res) {
    try {
      const member = await ProjectMemberService.getProjectMemberById(
        req.params.id
      );
      if (!member)
        return res
          .status(404)
          .json({ message: "Project member tidak ditemukan" });
      res.json(member);
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },

  async createProjectMember(req, res) {
    try {
      const newMember = await ProjectMemberService.createProjectMember(
        req.body
      );
      res.status(201).json(newMember);
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },

  async updateProjectMember(req, res) {
    try {
      const updatedMember = await ProjectMemberService.updateProjectMember(
        req.params.id,
        req.body
      );
      if (!updatedMember)
        return res
          .status(404)
          .json({ message: "Project member tidak ditemukan" });
      res.json(updatedMember);
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },

  async deleteProjectMember(req, res) {
    try {
      const deletedMember = await ProjectMemberService.deleteProjectMember(
        req.params.id
      );
      if (!deletedMember)
        return res
          .status(404)
          .json({ message: "Project member tidak ditemukan" });
      res.json({ message: "Project member berhasil dihapus" });
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },
};

module.exports = ProjectMemberController;
