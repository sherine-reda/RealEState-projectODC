const router = require("express").Router();
const Project = require("../app/controller/project.controller");
const {
  auth,
  authUrl,
  authUrlParams,
} = require("../app/middleware/auth.middleware");
const upload = require("../app/middleware/fileUpload.middleware");

router.post("/addProject", auth, authUrl, Project.addProject);
router.delete("/deleteProject/:id", auth, authUrlParams, Project.deleteProject);
router.patch("/editProject/:id", auth, Project.editProject);
router.get("/allProject", auth, Project.allProject);
router.get("/singleProject/:id", auth, Project.singleProject);
// router.patch("/projectImg/:id",auth, upload.single("img"), Project.uploadImage)
router.patch("/projectImg/:id", auth, Project.uploadImage);

module.exports = router;
