const UserModel = require("../models/UserModel");

async function getAllUser() {
  return await UserModel.getAllUser();
}

module.exports = {
  getAllUser,
};
