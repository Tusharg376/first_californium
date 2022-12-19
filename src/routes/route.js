const express = require('express');
const router = express.Router();
const controllers = requrie('../controllers/controllers')
const models = require ('../models/models')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createAuthor', controllers.createAuthor)
router.post('/createBook', controllers.createBook)

module.exports = router;