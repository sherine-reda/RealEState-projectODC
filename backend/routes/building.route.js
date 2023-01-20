const router = require("express").Router()
const Building = require('../app/controller/building.controller')
const {auth,authUrl,authUrlParams} = require("../app/middleware/auth.middleware");

router.post("/addBuilding",auth,authUrl, Building.addBuilding)
router.delete("/deleteBuilding/:id",auth,authUrlParams, Building.deleteBuilding)
router.patch("/editBuilding/:id",auth,authUrlParams, Building.editBuilding)
router.get("/allBuilding",auth, Building.allBuilding)
router.get("/singleBuilding/:id",auth, Building.singleBuilding)


module.exports = router