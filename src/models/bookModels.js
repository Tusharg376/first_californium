const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema ({
    bookName: {
        type: String,
        required: true
    },
    price:{
        indianPrice: Number,
        europeanPrice: Number
    },
    year :{
        type: Number,
        default: 2021
    },
    tags:[String],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean
    
}, {timestamps:true})
module.exports = mongoose.model('newBooks', bookSchema)