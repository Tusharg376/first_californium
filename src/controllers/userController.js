const BooksModel= require("../models/BooksModel")

const createBookData= async function (req, res) {
    let data= req.body
    let savedData= await BooksModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allUsers= await BooksModel.find()
    res.send({msg: allUsers})
}

module.exports.createBook= createBookData
module.exports.getBook= getBooksData