const router = require("express").Router()
const Role = require('../app/controller/role.controller')
const {auth,authUrl,authUrlParams} = require("../app/middleware/auth.middleware");

//auth
router.post("/addRole", Role.addRole)

module.exports = router
