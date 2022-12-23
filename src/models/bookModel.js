const mongoose = require('mongoose')
const objectId= mongoose.Schema.Types.ObjectId

const newBooks = new mongoose.Schema({
    name:String,
    author:{
        type:objectId,
        ref:"newAuthor"
    },
    price:Number,
    rating:Number,
    publisher:{
        type:objectId,
        ref:"publisher"
    },
    isHArdCover:{
        type:Boolean,
        default: false
    }
})


module.exports= mongoose.model('newBooks', newBooks)