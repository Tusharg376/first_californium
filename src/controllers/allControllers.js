const mongoose = require('mongoose')
const authorModel = require('../models/authorModel')
const publisherModel = require('../models/publisherModel')
const booksModel = require('../models/bookModel')
const bookModel = require('../models/bookModel')
const objectId = require('mongoose').isValidObjectId

const createAuthor = async function(req,res){
    let data = req.body
    let result = await authorModel.create(data)
    res.send({response:result})
}

const createPublisher = async function(req,res){
    
    let data = req.body
    let result = await publisherModel.create(data)
    res.send({response:result})
}

const createBook =  async function(req,res){

    let book = req.body

   if(!book.author ){
        res.send({msg : "Please Enter Author Details"})
    }   else if(!objectId(book.author)){
            return res.send({ msg :"INVALID Author Id"})
    }   else if(!book.publisher){
            return res.send ({msg : "Please Enter Publisher Details"})
    }   else if (!objectId(book.publisher)){
            return res.send ({msg : "INVALID Publisher Id"})
    }   else{
            const bookCreated = await booksModel.create(book)
            return res.send({msg: bookCreated})
    }
}

const allBooks = async function(req, res){
    let dataOfBooks = await booksModel.find().populate('author').populate('publisher')
    res.send({response:dataOfBooks})
}

const updateCover = async function (req,res){
    let dataPublisher = await publisherModel.find({name:{$in:['Penguin','Harper Collins']}})
    let publisherId = dataPublisher.map(publisher => publisher._id)
    let updateData = await bookModel.updateMany(
        {publisher:{$in:publisherId}},
        {$set:{isHArdCover:true}})
    res.send({response:updateData})
}

const updatePrice = async function (req , res){
    let author = await authorModel.find({rating:{$gt: 3.5}})
    let authorId = author.map((x)=> x._id)
    let finalData = await booksModel.updateMany(
        {author:{$in:authorId}},
        {$set:{price:10}})
    res.send({response:finalData})
}

module.exports.updatePrice = updatePrice
module.exports.updateCover = updateCover
module.exports.allBooks = allBooks
module.exports.createBook = createBook
module.exports.createPublisher = createPublisher
module.exports.createAuthor = createAuthor