const express = require('express')
const router = express.Router()

//Controller
const ToughtController = require('../controllers/toughtsController')

router.get('/', ToughtController.showToughts)
module.exports = router