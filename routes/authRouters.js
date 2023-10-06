const express = require('express')
const router = express.Router()

//Controlador da rota
const AuthController = require('../controllers/AuthController')

router.get("/login", AuthController.login)
router.get("/register", AuthController.register)
router.post("/register", AuthController.registerPost)

module.exports = router