const jwt = require("jsonwebtoken");
const User = require("../users/user.model");
const userauth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    // console.log(token)
    const decoded = jwt.verify(token, "secretKey");
    console.log(decoded, decoded._id);
    const user = await User.findOne({ _id: decoded.userdata._id });
    console.log(user, token);
    if (!user) {
      console.log("not user");
      throw new Error();
    }
    req.token = token;
    req.user = user;
    req._id = decoded.userdata._id;
    console.log(user, "From userauth console");
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};
module.exports = userauth;
