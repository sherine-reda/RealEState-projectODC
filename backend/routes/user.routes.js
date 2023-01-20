const router = require("express").Router()

const User = require('../app/controller/user.conteroller')
const {auth,authUrl,authUrlParams} = require("../app/middleware/auth.middleware");

 router.post("/addUser", User.addUser)
 router.post("/login", User.login)
 router.get('/profile/:id',auth, User.userProfile )
 router.delete('/deleteUser/:id',authUrlParams, User.deleteUser )
 router.get('/allUser', User.allusers )
 router.patch("/editUser/:id",auth,User.editUser)

module.exports = router