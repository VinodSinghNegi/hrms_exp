const User = require("../user.model");
const { validationResult } = require("express-validator");

const addUser = async (req, res, next) => {
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
    res.send({ user });
  } catch (e) {
    console.log(e.message);
    return res.status(500).send("server error");
  }
};

module.exports = { addUser };
