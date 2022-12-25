const orderModel = require("../models/orderModel")
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')
const {isValidObjectId, default: mongoose} = require('mongoose');

const createProduct = async function(req,res){
    let data = req.body
    let finalData = await productModel.create(data)
    res.send({msg:finalData})
}

const createUser = async function(req, res){
    let data = req.body
    data.isFreeAppUser = req.headers.isfreeappuser
    let finalData = await userModel.create(data)
    res.send({msg:finalData})
}

const createOrder = async function(req,res){
    let data = req.body
    // if (!isValidObjectId(data.userId)){
    //     res.send({msg:"enter valid userID"})
    // }
    // if (!isValidObjectId(data.productId)){
    //     res.send({msg:"enter valid productId"})
    // }
    {
    let finalData = await orderModel.create(data)
    res.send({msg:finalData})
    }
}





module.exports.createOrder = createOrder
module.exports.createUser = createUser
module.exports.createProduct = createProduct