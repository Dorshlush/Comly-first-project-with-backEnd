const {validate,Comment}=require("../model/comment")
const authorization=require("../middlewares/authorization")

//get all comments
exports.getAllComments=async(req,res)=>{
    
    const comments = await Comment.find().sort();
    if(!comments)
        res.status(400).send('No Comments ')
    
    res.send(comments);
    }
//adding new comment
exports.addNewComment= async(req,res,next)=>{
    
    const results = validate(req.body)
    if(results.error){
        // bad REQUEST 400
        res.status(400).send(results.error.details[0].message)
        return
    }

    let comment = new Comment({
        name: req.body.name,
        body : req.body.body
    }
    );
    
    comment = await comment.save()
    
    res
    .send(comment)
    
};



//delete comment by mongo id
exports.deleteComment=async(req,res)=>{

    const comment= await Comment.findByIdAndRemove(req.params._id);
    if(!comment){
        res.status(400).send('this comment does not exist')
        return;
    }
    res.send(true);
}


// function authorization1(req,res) {
//     const token = req.header('x-auth-token')
//     if (!token) 
//         return res.status(401).send('access denied no token provided')

//     try{
//         const decoded = jwt.verify(token,'thatsTheWordIuseToEncrypt');
//         req.user = decoded;
        
//         }
//     catch{
//         res.status(400).send('invalid token')
//     }
    
// }