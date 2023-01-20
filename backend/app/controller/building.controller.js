const BuildingModel = require("../../db/models/building.model");
const myHelper = require("../../app/helper");

class Building {
  static addBuilding = async (req, res) => {
    try {
      const BuildingData = new BuildingModel(req.body);
      await BuildingData.save();
      myHelper.resHandler(
        res,
        200,
        true,
        BuildingData,
        "Building added successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };

  static singleBuilding = async (req, res) => {
    try {
      const BuildingData = await BuildingModel.find({ _id: req.params.id });

      myHelper.resHandler(
        res,
        200,
        true,
        BuildingData,
        "singleBuilding successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };

  static deleteBuilding = async (req, res) => {
    try {
      const BuildingData = await BuildingModel.deleteOne({ _id: req.params.id });

      myHelper.resHandler(
        res,
        200,
        true,
        BuildingData,
        " delete Building successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
  static editBuilding = async (req, res) => {
    try {
      const Building = await BuildingModel.updateOne(
        { _id: req.params.id },
        req.body
      );

      console.log(req.body);
      myHelper.resHandler(res, 200, true, Building, " Building is edited ");
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
  static allBuilding = async (req, res) => {
    try {
      const BuildingData = await BuildingModel.find();

      myHelper.resHandler(
        res,
        200,
        true,
        BuildingData,
        "all Buildings.. successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
}
module.exports = Building;
