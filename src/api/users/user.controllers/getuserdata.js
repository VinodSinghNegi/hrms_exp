const jwt = require("jsonwebtoken");
const User = require("../user.model");
const getuserdata = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secretKey");
    const user = await User.findOne({ _id: decoded.userdata });
    const user2 = await User.findById(user._id)
      .select("-password -__v")
      .populate("kraAttributes designation_id department_id reportingManager", [
        "name"
      ]);

    res.json(user2);
  } catch (e) {
    console.log(e);
    res.status(401).send({ error: "Please authenticate" });
  }
};
module.exports = { getuserdata };
