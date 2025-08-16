const UserModel = require("../models/UserModel");

const UserService = {
  async getAllUser() {
    return await UserModel.getAllUser();
  },

  async getUserById(id) {
    return await UserModel.getUserById(id);
  },

  async createUser(data) {
    return await UserModel.createUser(data);
  },

  async updateUser(id, data) {
    return await UserModel.updateUser(id, data);
  },

  async deleteUser(id) {
    return await UserModel.deleteUser(id);
  },
};

module.exports = UserService;
