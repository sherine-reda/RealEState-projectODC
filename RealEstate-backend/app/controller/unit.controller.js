const UnitModel = require("../../db/models/units.model");
const myHelper = require("../../app/helper");
const upload = require("../middleware/fileUpload.middleware");
const multer = require("multer");
class Unit {
  static addUnit = async (req, res) => {
    try {
      const UnitData = new UnitModel(req.body);
      await UnitData.save();
      myHelper.resHandler(
        res,
        200,
        true,
        UnitData,
        "Unit added successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };

  static singleUnit = async (req, res) => {
    try {
      const UnitData = await UnitModel.find({ _id: req.params.id });

      myHelper.resHandler(
        res,
        200,
        true,
        UnitData,
        "singleUnit successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };

  
  static editUnit = async (req, res) => {
    try {
      const Unit = await UnitModel.updateOne(
        { _id: req.params.id },
        req.body
      );

      console.log(req.body);
      myHelper.resHandler(res, 200, true, Unit, " Unit is edited ");
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
  static allUnit = async (req, res) => {
    try {
      const UnitData = await UnitModel.find();

      myHelper.resHandler(
        res,
        200,
        true,
        UnitData,
        "all Units.. successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };

  static deleteUnit = async (req, res) => {
    try {
      const UnitData = await UnitModel.deleteOne({ _id: req.params.id });

      myHelper.resHandler(
        res,
        200,
        true,
        UnitData,
        " delete Unit successfully"
      );
    } catch (e) {
      myHelper.resHandler(res, 500, false, e, e.message);
    }
  };
  static uploadImage = async (req, res) => {
    try {
      const upload1 = upload.single("img");
      upload1(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          return res.send({ err: "invalid upload" });
        } else if (err) {
          return res.send({ err: "invalid upload 1" });
        }
        return res.send(req.file);
      });
    } catch (e) {
      res.send(e.message);
    }
  };
}
module.exports = Unit;
