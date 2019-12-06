const User = require("../user.model");
const showme = async (req, res) => {
  const user = await User.findById(req._id).populate("kraAttributes", ["name"]);
  console.log(user);
  res.send(user);
};
module.exports = { showme };
