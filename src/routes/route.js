const express = require('express');
const router = express.Router();
const UserModel= require("../models/BooksModel")
const UserController= require("../controllers/userController")



router.post("/createBook", UserController.createBook  )

router.get("/findBook", UserController.getBook)

module.exports = router;