const userModel = require("../../db/models/user.model");
const myHelper = require("../../app/helper");
const fs = require("fs");
// const upload = require("../middleware/fileUpload.middleware")
// const multer = require("multer")
class User {
  static addUser = async (req, res) => {
    try {
      if (req.body.password.length < 6)
        throw new Error("password must be more than 6");
      const userData = new userModel(req.body);
      await userData.save();
      myHelper.resHandler(res, 200, true, userData, "user added successfully");
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
  static login = async (req, res) => {
    try {
      const userData = await userModel.loginUser(
        req.body.email,
        req.body.password
      );
      const token = await userData.generateToken();
      myHelper.resHandler(
        res,
        200,
        true,
        { user: userData, token },
        "user added successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };

  static allusers = async (req, res) => {
    try {
      const userData = await userModel.find();

      myHelper.resHandler(res, 200, true, userData, "all users.. successfully");
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };

  static userProfile = async (req, res) => {
    try {
      const userData = await userModel
        .find({ _id: req.params.id })
        .populate("roleId");

      myHelper.resHandler(
        res,
        200,
        true,
        userData,
        "user profile successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
  static deleteUser = async (req, res) => {
    try {
      const userData = await userModel.deleteOne({ _id: req.params.id });

      myHelper.resHandler(
        res,
        200,
        true,
        userData,
        " delete user successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
  static editUser = async (req, res) => {
    try {
      const user = await userModel.updateOne({ _id: req.params.id }, req.body);

      console.log(req.body);
      myHelper.resHandler(res, 200, true, user, " user is edited ");
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };

  static uploadImage = async (req, res) => {
    try {
      const ext = req.file.originalname.split(".").pop();
      const newName = "uploads/" + Date.now() + "testApp." + ext;
      fs.renameSync(req.file.path, newName);
      req.user.image = newName;
      await req.user.save();
      myHelper.resHandler(res, 200, true, req.user, "updated");
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
}
module.exports = User;
