const models = require('../models/models')
const bookModels = require('../models/models')

const createAuthor = async function (req,res){
    let data = req.body
    res.send = await models.create(data)

}

const createBook = async function (req,res){



}

module.exports.createAuthor = createAuthor
module.exports.createBook = createBook