const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const logger = require('../logger/logger.js')
const helper = require('../util/helper')
const formatter = require('../validator/formatter')
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    // console.log("email from introduction module", intro.myEmail)
    // intro.myFunction('Sabiha')
    // console.log("email from employee module", employee.myEmail)
    // logger.welcome('Tushar')

    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // let result = _.first(days, 4)
    // console.log(`Result from underscore function is ${result}`)

    // helper.date()
    // helper.month()
    // helper.info()

    // formatter.trim()
    // formatter.lowerCase()
    // formatter.upperCase()

    console.log(lodash.chunk(["January", "February","March","April","May","June"," July"," August","September","October","November","December"],3))
    console.log(lodash.tail([1,3,5,7,9,11,13,15,17,19]))
    console.log(lodash.union([1,2],[2,3,4],[3,4,5,6],[4,5,6,7],[7,8,9]))
    console.log(lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]))
    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;