const productModel = require("../models/productModel")
const userModel = require("../models/userModel")


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
    let userCheck = await userModel.findOne({_id:data.userId})
    let productCheck = await productModel.findOne({_id:data.productId})
    next()

}



module.exports.checkUserId = checkUserId
module.exports.userValidation = userValidation