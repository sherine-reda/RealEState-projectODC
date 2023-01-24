const router = require("express").Router()
const Unit = require('../app/controller/unit.controller')
const {auth,authUrl,authUrlParams} = require("../app/middleware/auth.middleware");

router.post("/addUnit",auth,authUrl, Unit.addUnit)
router.patch("/editUnit/:id",auth,authUrlParams, Unit.editUnit)
router.get("/allUnit",auth,authUrl, Unit.allUnit)
router.get("/singleUnit/:id",auth, Unit.singleUnit)
router.delete("/deleteUnit/:id", auth, authUrlParams, Unit.deleteUnit);
router.patch("/unitImg/:id", auth, Unit.uploadImage);

module.exports = router