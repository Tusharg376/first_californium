const express = require('express');
const router = express.Router();
const controller = require("../controllers/controllers")
const userModel = require('../models/userModel')
const middleware = require('../middleware/middleware')
router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/user', controller.userCreate)

router.post('/login',middleware.varify, controller.userLogin)

module.exports = router;