const userModel = require("../models/userModel")
const jwt = require('jsonwebtoken')

const userCreate = async function(req,res){
    let data = req.body
    let finalData = await userModel.create(data)
    res.send({msg:finalData})
}

const userLogin = async function (req,res){
    let data = req.body
    let createLogin = await userModel.findOne({emailId:data.emailId})
    let payLoad = {email:data.emailId,ID:createLogin._id}
    let result = jwt.sign(payLoad, "loginCreated")

    res.send({status:true, response:result})
}

const userDetails = async function(req,res){
    let data = req.params.userId
    let result = await userModel.find({_id:data})
    if(!result){
        return res.send({status:false,msg:"user not found"})
    } else {
        res.send({status:true, msg:result})
    }
}



const userEdit = async function(req,res){
    let data = req.params.userId
    let bData = req.body

    let result = await userModel.findOneAndUpdate(
        {_id:data},
        {$set:bData},
        {new:true}
        )
    res.send({status:true, msg:result})
}

const deleteUser = async function(req,res){
    let data = req.params.userId
    
    let result = await userModel.findOneAndUpdate(
        {_id:data},
        {$set:{isDeleted:true}},
        {new:true}
        )
    res.send({status:true, msg:result})
}

module.exports.deleteUser = deleteUser
module.exports.userDetails = userDetails
module.exports.userLogin = userLogin
module.exports.userCreate = userCreate
module.exports.userEdit = userEdit
