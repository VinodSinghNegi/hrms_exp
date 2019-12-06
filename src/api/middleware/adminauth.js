const jwt = require("jsonwebtoken");
const User = require("../users/user.model");
const Designation = require("../designation/designation.model");
const userauth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secretKey");
    const user = await User.findOne({ _id: decoded.userdata._id });

    const designation = await Designation.findById(user.designation_id);
    if (designation.name !== "Admin") {
      throw new Error("you do not access to add user");
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    res.status(401).send({ error: "Please authenticate" });
  }
};
module.exports = userauth;
