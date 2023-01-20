const router = require("express").Router()
const Project = require('../app/controller/project.controller')
const {auth,authUrl,authUrlParams} = require("../app/middleware/auth.middleware");

router.post("/addProject",auth,authUrl, Project.addProject)
router.delete("/deleteProject/:id",auth,authUrlParams, Project.deleteProject)
router.patch("/editProject/:id",auth,authUrlParams, Project.editProject)
router.get("/allProject",auth, Project.allProject)
router.get("/singleProject/:id",auth, Project.singleProject)


module.exports = router