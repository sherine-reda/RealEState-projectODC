const router = require("express").Router();
const User = require("../app/controller/user.conteroller");
const {
  auth,
  authUrl,
  authUrlParams,
} = require("../app/middleware/auth.middleware");
const upload = require("../app/middleware/fileUpload.middleware");

router.post("/addUser", User.addUser);
router.post("/login", User.login);
router.get("/profile/:id", auth, User.userProfile);
router.delete("/deleteUser/:id", auth, User.deleteUser);
router.get("/allUser", auth, authUrl, User.allusers);
router.patch("/editUser/:id", auth, User.editUser);
router.patch("/profileImg/", auth, upload.single("img"), User.uploadImage);

module.exports = router;
