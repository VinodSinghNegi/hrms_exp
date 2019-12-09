const User = require("../../users/user.model");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const mailer=require('../../../../utils/mailer')
const NotificationModel=require("../../notification/notification.model")
const NotificationType=require("../../notification/notificationType.model")

const addUser = async (req, res, next) => {
  console.log('in addUser')
  const errors = validationResult(req.body.userdata);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  try {
    const newUser = { ...req.body.userdata };
    newUser.reportingManager = Number(newUser.reportingManager._id);
    
    const arr=await newUser.kraAttributes.map((kra)=>{
        return kra._id
    })
    newUser.kraAttributes = arr;
    const token= jwt.sign({userdata:newUser},"secretKey")
    const email=newUser.email;
    const verify=`http://localhost:5000/user/verifylogin/${token}`
    console.log("verify",verify);
    
    // await mailer(email,verify)

    const user = new User(newUser);
    // await user.save();
    res.send({msg:'successfully saved user'});
  } catch (e) {
    console.log(e.message);
    return res.status(500).send({msg:e.message});
  }
};

module.exports = { addUser };
