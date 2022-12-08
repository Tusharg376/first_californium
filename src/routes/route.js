const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})

router.get('/test-we', function(req, res){
    console.log("this one is made by me")
    res.send("my new one")
})

module.exports = router;