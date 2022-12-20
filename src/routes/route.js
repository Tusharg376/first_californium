const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers.js')


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


router.post('/createAuthor', controllers.createAuthor)
router.post('/createBook', controllers.createBook)
router.get('/listOfBooks', controllers.listOfBooks)
router.get('/updatePrice', controllers.updatePrice)
router.get('/findBooks', controllers.findBook)

module.exports = router;