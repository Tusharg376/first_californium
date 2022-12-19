const mongoose = require('mongoose')
const bookModel = require ('../models/bookModels')



const createBook = async function(req, res){
    let bookData = req.body
    let finalData = await bookModel.create(bookData)
    res.send({response:finalData})
}

const allBooks = async function(req, res){
    let findList= await bookModel.find()
    res.send({response:findList})
}

const bookList = async function (req, res){
    let findList = await bookModel.find().select({bookName:1, authorName:1, _id:0})
    res.send({response:findList})
}

const getBooksInYear = async function(req, res){
    let dataAsked = req.params.year
    let finalRes = await bookModel.find({year:{$eq:dataAsked}})
    res.send({response:finalRes})
}

const getParticularBook = async function(req, res){
    let result = await bookModel.find(req.body)
    res.send({response:result})
}

const getINRBooks= async function (req, res){
    let finalData= await bookModel.find({"price.indianPrice":{$in:[100,200,500]}})
    res.send({result:finalData})
}

const getRandomBooks = async function (req, res){
    let finalData = await bookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({response:finalData})
}
module.exports.getRandomBooks = getRandomBooks
module.exports.getParticularBook = getParticularBook
module.exports.getINRBooks = getINRBooks
module.exports.getBooksInYear = getBooksInYear
module.exports.allBooks= allBooks
module.exports.bookList = bookList
module.exports.createbook = createBook