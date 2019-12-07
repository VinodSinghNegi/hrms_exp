const User = require("../../users/user.model");
const { validationResult } = require("express-validator");

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

    const user = new User(newUser);
    await user.save();
    res.send({msg:'successfully saved user'});
  } catch (e) {
    console.log(e.message);
    return res.status(500).send({msg:e.message});
  }
};

module.exports = { addUser };
