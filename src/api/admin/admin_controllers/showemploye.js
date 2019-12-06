const User = require("../../users/user.model");
const showEmploye = async (req, res) => {
  const user = await User.find({ name: { $nin: ["CEO"] } })
    .select("name jobStatus")
    .populate("designation_id department_id prefix ", ["name"]);
  res.send(user);
};
module.exports = { showEmploye };
