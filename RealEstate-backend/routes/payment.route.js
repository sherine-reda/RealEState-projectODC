const router = require("express").Router()
const Payment = require('../app/controller/payment.controller')
const {auth,authUrl,authUrlParams} = require("../app/middleware/auth.middleware");

router.post("/addPayment",auth,authUrl, Payment.addPayment)
router.delete("/deletePayment/:id",auth,authUrlParams, Payment.deletePayment)
router.patch("/editPayment/:id",auth,authUrlParams, Payment.editPayment)
router.get("/allPayment",auth,authUrl, Payment.allPayment)
router.get("/singlePayment/:id",auth, Payment.singlePayment)


module.exports = router