const userModel = require("../../db/models/user.model");
const urlModel = require("../../db/models/urls.model");
const unitModel = require("../../db/models/units.model");
const buildingModel = require("../../db/models/building.model");
const projectModel = require("../../db/models/projects.model");
const paymentModel = require("../../db/models/payment.model");

const myHelper = require("../../app/helper");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decodedToken = jwt.verify(token, process.env.tokenPass);
    const userData = await userModel
      .findOne({
        _id: decodedToken._id,
        "tokens.token": token,
      })
      .populate("roleId");
    req.user = userData;
    req.token = token;
    // console.log(req.user.roleId);

    next();
  } catch (e) {
    myHelper.resHandler(res, 500, false, e.message, "unauthorized");
  }
};
const authUrl = async (req, res, next) => {
  try {
    const URL = await urlModel.findOne({
      link: req.url,
      method: req.method,
      "Roles.roleId": req.user.roleId,
    });

    console.log(URL);
    if (!URL) throw new Error("not admin");
    next();
  } catch (e) {
    myHelper.resHandler(res, 500, false, e.message, "unauthorized not admin");
  }
};
const authUrlParams = async (req, res, next) => {
  try {
    let Url = req.url.slice(req.url.indexOf("/"), req.url.lastIndexOf("/") + 1);
    const URLParams = await urlModel.findOne({
      link: Url,
      method: req.method,
      paramskeys: Object.values(req.params),
      "Roles.roleId": req.user.roleId,
    });

    console.log(URLParams);
    if (!URLParams) throw new Error("not admin");
    next();
  } catch (e) {
    myHelper.resHandler(res, 500, false, e.message, "unauthorized not admin");
  }
};

const authunit = async (req, res, next) => {
  try {
    const unit = await unitModel.findOne({
      units: req.addressUnit,
    });

    console.log(unit);
    if (!unit) throw new Error("is not unit in this building");
    next();
  } catch (e) {
    myHelper.resHandler(res, 500, false, e.message, "unauthorized not admin");
  }
};

// const authunit = async (req, res, next) => {
//   try {
//     let Unit = req.url.slice(req.url.indexOf("/"), req.url.lastIndexOf("/") + 1);
//     const URLParams = await urlModel.findOne({
//       link: Url,
//       method: req.method,
//       paramskeys: Object.values(req.params),
//       "Roles.roleId": req.user.roleId,
//     });

//     console.log(URLParams);
//     if (!URLParams) throw new Error("not admin");
//     next();
//   } catch (e) {
//     myHelper.resHandler(res, 500, false, e.message, "unauthorized not admin");
//   }
// };
module.exports = { auth, authUrl, authUrlParams,authunit };
