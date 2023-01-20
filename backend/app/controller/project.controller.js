const projectModel = require("../../db/models/projects.model");
const myHelper = require("../../app/helper");

class Project {
  static addProject = async (req, res) => {
    try {
      const projectData = new projectModel(req.body);
      await projectData.save();
      myHelper.resHandler(
        res,
        200,
        true,
        projectData,
        "project added successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };

  static singleProject = async (req, res) => {
    try {
      const projectData = await projectModel.find({ _id: req.params.id });

      myHelper.resHandler(
        res,
        200,
        true,
        projectData,
        "singleProject successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };

  static deleteProject = async (req, res) => {
    try {
      const projectData = await projectModel.deleteOne({ _id: req.params.id });

      myHelper.resHandler(
        res,
        200,
        true,
        projectData,
        " delete project successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
  static editProject = async (req, res) => {
    try {
      const project = await projectModel.updateOne(
        { _id: req.params.id },
        req.body
      );

      console.log(req.body);
      myHelper.resHandler(res, 200, true, project, " project is edited ");
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
  static allProject = async (req, res) => {
    try {
      const projectData = await projectModel.find();

      myHelper.resHandler(
        res,
        200,
        true,
        projectData,
        "all projects.. successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
}
module.exports = Project;
