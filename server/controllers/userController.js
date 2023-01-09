const {User,validate} = require('../model/user')
const _=require('lodash')
const bcrypt =require('bcrypt')
const jwt=require("jsonwebtoken")


exports.addNewUser=async (req,res)=>{
    const {error} = validate(req.body)
  if(error) return res.status(400).send(error.details[0].message)
  
  let user = await User.findOne({email:req.body.email})
  if(user) return res.status(400).send('User already exsist ')

   
     user= new User( _.pick(req.body,['name','email','password']))
     const salt = await bcrypt.genSalt(10)
     user.password = await bcrypt.hash(user.password,salt)

    try{

        user = await user.save()    
    }
    catch(err){
        res.status(500).send('somethong went wrong')
    }    
    
    res
    .header('x-auth-token',user.generateJWT())
    .header('access-control-expose-headers','x-auth-token')
    .send(_.pick(user,['name','email']));
}

exports.getUserDetails=async (req,res)=>{
    let user = await User.findOne({email:req.body.email})
    

try {
    res.send(user.name);
} catch (error) {
    res(error.message)
    
}

}
