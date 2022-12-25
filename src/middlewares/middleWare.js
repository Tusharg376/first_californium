const { default: mongoose } = require("mongoose")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const isValid = mongoose.isValidObjectId

const userValidation = function (req,res,next) {
    let validData = req.headers.isfreeappuser
    console.log(validData )
    if(validData != undefined){
        next()
    }else{
        res.send({msg:"request is missing a mandatory header"})
    }
}

const checkUserId = async function (req,res,next) {
    let data = req.body
    let hData = req.headers
    if (!isValid(data.userId)){
       return res.send({msg:"user Id is invalid"})
    }
    if (!isValid(data.productId)){
       return res.send({msg:"Product Id is invalid"})
    }
    let userCheck = await userModel.findOne({_id:data.userId})
    
    // let productCheck = await productModel.findOne({_id:data.productId})
    
    if (hData.isfreeappuser == "false"){
        let accBalance = userCheck.balance
        let price = data.amount
        if (accBalance < price){
           return res.send({msg:"Insufficient balance"})
        }
        {
            let finalBal = accBalance-price
            // console.log(accBalance)
            // console.log(price)
            // console.log(finalBal)
            let finalOutput = await userModel.findOneAndUpdate(
                {_id:data.userId},
                {$set:{balance:finalBal}},
                {new:true}
            )
        }    
    }
    next()
}




module.exports.checkUserId = checkUserId
module.exports.userValidation = userValidation