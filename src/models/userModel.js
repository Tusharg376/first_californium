const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    balance:{
    type: Number,
    default: 100
    },
    address:String,
    gender: $enum["male","female","other"],
    isFreeAppUser : {
        type: Boolean,
        default: false
    }
})

