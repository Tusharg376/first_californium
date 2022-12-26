const userModel = require("../models/userModel")

const userCreate = async function(req,res){
    let data = req.body
    let finalData = await userModel.create(data)
    res.send({msg:finalData})
}

// const userLogin = async function (req,res){
//     let tokenData = 
// }


module.exports.userLogin = userLogin
module.exports.userCreate = userCreate

