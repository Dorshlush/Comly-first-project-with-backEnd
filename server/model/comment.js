const mongoose = require('mongoose')
const Joi = require('joi')


const Comment = new mongoose.model('Comment', new mongoose.Schema({
  
    name:{
        type: String,
        required : true,
        minlength: 3 ,
        maxlength: 50
    },
   
    body:{
        type: String,
        required : true,
        maxlength: 500, 
        minlength: 3
    }

}) ) ;

function vaidateComment(comment){
    const schema = {
        
        name: Joi.string().min(3).max(50).required(),
        body: Joi.string().min(3).max(500).required()
    };

    return Joi.validate(comment,schema)}


module.exports.validate= vaidateComment
module.exports.Comment= Comment