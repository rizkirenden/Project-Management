const ProjectService = require("../services/ProjectService");

const ProjectController = {
  async getAllProject(req, res) {
    try {
      const projects = await ProjectService.getAllProject();
      res
        .status(200)
        .json({ message: "Proyek berhasil ditampilkan", data: projects });
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },

  async getProjectById(req, res) {
    try {
      const project = await ProjectService.getProjectById(req.params.id);
      if (!project)
        return res.status(404).json({ message: "Proyek tidak ditemukan" });
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },

  async createProject(req, res) {
    try {
      const newProject = await ProjectService.createProject(req.body);
      res.status(201).json(newProject);
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },

  async updateProject(req, res) {
    try {
      const updatedProject = await ProjectService.updateProject(
        req.params.id,
        req.body
      );
      if (!updatedProject)
        return res.status(404).json({ message: "Proyek tidak ditemukan" });
      res.json(updatedProject);
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },

  async deleteProject(req, res) {
    try {
      const deletedProject = await ProjectService.deleteProject(req.params.id);
      if (!deletedProject)
        return res.status(404).json({ message: "Proyek tidak ditemukan" });
      res.json({ message: "Proyek berhasil dihapus" });
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
  },
};

module.exports = ProjectController;
