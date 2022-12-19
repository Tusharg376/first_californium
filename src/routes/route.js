const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/bookControllers')
const bookModels= require('../models/bookModels')

router.get('/test-me', function (req, res) {
    let test = req.body
    let second = test.
    console.log (test)
    res.send("running great")
});

router.post('/createBook', bookControllers.createbook)

router.get('/allBooks', bookControllers.allBooks)

router.get('/bookList', bookControllers.bookList)

router.get('/getBooksInYear/:year', bookControllers.getBooksInYear)

router.post('/getParticularBooks', bookControllers.getParticularBook)

router.get('/getINRBooks', bookControllers.getINRBooks)

router.get('/getRandomBooks', bookControllers.getRandomBooks)
module.exports = router;