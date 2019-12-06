const User = require('../../users/user.model')
const {check,validationResult}=require("express-validator")


const addUser = async (req, res, next) => {
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array())
    }
    try {
        console.log("contr",req.body);
        const newUser={...req.body}
        newUser.reportingManager=Number(newUser.reportingManager)
        console.log(typeof( newUser.reportingManager));
        

        const user = new User(newUser)
        await user.save()
       res.send({user})
    } catch (e) {
        console.log(e.message);
        return res.status(500).send("server error")
    }
}


module.exports = { addUser }