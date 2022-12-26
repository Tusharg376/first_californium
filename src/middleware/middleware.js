const userModel = require('../models/userModel')

const varify = async function(req,res,next){
    let data = req.body
    let userCheck = await userModel.findOne({$and:{emailId:data.emailId,password:data.password}})

    if(!userCheck){
        return res.send({status:true, msg:"userId or Password is incorrect"})
    }
    next()
}

module.exports.varify = varify