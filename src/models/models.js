const mongoose = require('mongoose')

const authorSchmea = new mongoose.Schema({

    author_id : {
        type:Number,
        required: true
    },
    author_name: String,
    age : Number,
    address: String

},{timestamps:true})

const bookSchema = new mongoose.Schema({
    name:String,
    author_id: Number,
    price : Number,
    rating : Number

}, {timestamps:true})

module.exports = mongoose.model("author", authorSchmea)
module.exports = mongoose.model("assgnBooks", bookSchema)