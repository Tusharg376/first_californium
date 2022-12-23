const express = require('express');
const router = express.Router();
const allContollers = require('../controllers/allControllers')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createAuthor', allContollers.createAuthor)
router.post('/createPublisher', allContollers.createPublisher)
router.post('/createBook', allContollers.createBook)
router.get('/allBooks', allContollers.allBooks)
router.put('/updateCover', allContollers.updateCover)
router.put('/updatePrice', allContollers.updatePrice)
module.exports = router;