const authorModels = require ('../models/authorModel')
const bookModels = require ('../models/bookModels')


const createAuthor = async function (req,res){
    let data = req.body
    let result = await authorModels.create(data)
    res.send({response: result})
}

const createBook = async function (req,res){
    let data = req.body
    let result = await bookModels.create(data)
    res.send({ response : result })
}

const listOfBooks = async function( req, res){
    let data = req.body
    let authorObj = await authorModels.findOne(data)
    let id = authorObj.author_id
    let finalResult = await bookModels.find({author_id:id})
    res.send({result : finalResult})
}

const updatePrice = async function (req,res){
    let dataName = req.body.name
    let dataPrice = req.body.price 
    let updateP = await bookModels.findOneAndUpdate(
        {name:dataName},
        {$set:{price:dataPrice}}, 
        {new:true})
    let bookAuthor =  await authorModels.findOne({author_id:updateP.author_id}) 
    
    let finalAnswer = [{author_name:bookAuthor.author_name,
    price:updateP.price}]
        res.send({response:finalAnswer})

}

const findBook = async function(req,res){
    let data = await bookModels.find({price:{$gte:50,$lte:100}})
    let arr = data.map((x)=> x.author_id)
    let allBooks = await authorModels.find({author_id:{$in: arr}})
    res.send({response:allBooks})
} 

module.exports.findBook = findBook
module.exports.updatePrice = updatePrice
module.exports.listOfBooks = listOfBooks
module.exports.createAuthor = createAuthor
module.exports.createBook = createBook