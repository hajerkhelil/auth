
const express= require("express");
const {isAuth} = require('../middlewares/isAuth')

const { RegisterValidation, Validation, LoginValidation } = require("../middlewares/Register")
const { Register, Login } = require("../controllers/auth")
const AuthRoute= express.Router()

AuthRoute.post('/signup',RegisterValidation, Validation, Register)

AuthRoute.post('/signin',LoginValidation, Validation, Login)

AuthRoute.get('/current', isAuth, (req,res)=> res.send(req.user))

module.exports = AuthRoute;