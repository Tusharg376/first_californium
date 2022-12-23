const mongoose = require('mongoose')

const publisher = new mongoose.Schema({
    name:String,
    headQuarter:String
},{timestamps:true})

module.exports = mongoose.model('publisher', publisher)