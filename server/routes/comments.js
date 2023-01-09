const mongoose = require('mongoose')
const express = require('express')
const Joi = require('joi')
const router = express.Router()
const authorization = require('../middlewares/authorization')

const {getAllComments,addNewComment,deleteComment}=require("../controllers/commentController")



router
.route('/')
.get(getAllComments)
.post(addNewComment);

router
.route('/:id')
.delete(deleteComment)




module.exports = router ;