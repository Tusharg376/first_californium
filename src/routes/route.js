const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post("/createUser", controller.createuser)
module.exports = router;