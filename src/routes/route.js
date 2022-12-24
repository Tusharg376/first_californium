const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
const productModel = require('../models/productModel');
const middleWare = require('../middlewares/middleWare')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createProduct', controllers.createProduct)

router.post("/createUser",middleWare.userValidation ,controllers.createUser)

router.post("/createOrder",middleWare.userValidation, middleWare.checkUserId,controllers.createOrder)

module.exports = router;
