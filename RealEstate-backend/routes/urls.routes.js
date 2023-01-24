const router = require("express").Router()
const Url = require('../app/controller/urls.controller')

router.post("/addUrl", Url.addUrl)
router.patch("/editUrl/:id", Url.editUrl)
router.get("/allUrl", Url.allUrl)
router.get("/singleUrl/:id", Url.singleUrl)
module.exports = router