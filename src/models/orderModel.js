const mongoose = required('mongoose')
const objectId = mongoose.Schema.Types.objectId

const orderSchema = new mongoose.Schema ({
    userId : {
        type:objectId,
        ref: userData
    },
    productId:{
        type:objectId,
        ref:products
    },
    amount: Number,
    isFreeAppUser : {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('order', orderSchema)