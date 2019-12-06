const User = require("../../users/user.model");
const showEmploye = async (req, res) => {
  const user = await User.find({ name: { $nin: ["CEO"] } })
    .select("prefix name jobStatus")
    .populate("designation_id department_id ", ["name"]);
  res.send(user);
};
module.exports = { showEmploye };
