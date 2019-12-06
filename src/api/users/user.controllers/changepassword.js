const User = require('../user.model')
const changePass=async(req,res,next)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const user =await User.findOneAndUpdate({email},{$set:{password}}, {new: true}, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!",err.message);
            }
        
            console.log(doc)
        })
        
        
        res.send(user)
 
}catch{
    res.send("wrong token catch")
}
}
module.exports = { changePass }