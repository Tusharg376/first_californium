const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const passwordVerify = async function(req,res,next){
    let eData = req.body.emailId
    let pData = req.body.password
    let userCheck = await userModel.findOne({emailId:eData,password:pData})

    if(!userCheck){
        return res.send({status:true, msg:"userId or Password is incorrect"})
    }
    next()
}

const tokenValidation = async function(req,res,next){
    let data = req.headers["x-auth-token"]
    if(!data){
        return res.send({status:false, msg:"token not found"})
    }
    let tokenDes = jwt.verify(data,"loginCreated")
    next()
}



module.exports.tokenValidation = tokenValidation
module.exports.passwordVerify = passwordVerify
