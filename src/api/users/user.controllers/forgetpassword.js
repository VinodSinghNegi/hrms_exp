const User = require('../user.model')
const mailer=require('../../../../utils/mailer')
const jwt = require("jwt-simple");

const forget=async(req,res,next)=>{
    // const user = await User.findByCredentials(req.body.email)
    try{  
        const user=await User.findOne({email:req.body.email})
        const userEmail=user.email
        console.log(userEmail);

        let date=new Date();
        let time=date.getTime();
        token = jwt.encode({userEmail, time }, "secretKey");
        console.log(token,"mail vala token");
        const verify=`http://localhost:5000/verify/${token}`
        await mailer(userEmail,verify)
  
        console.log("in forget");
        res.send(verify)
        next()
}catch(err){
    console.log(err.message)
    res.send("Email does not exist")
}
}


module.exports = { forget }
