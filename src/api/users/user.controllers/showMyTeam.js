const User = require("../user.model");
const showMyTeam = async (req, res) => {
  try {
    const team = await User.find({ reportingManager: req._id })
      .populate("designation_id  department_id ", ["name"])
      .select("prefix name designation_id department_id jobStatus gender");
    console.log(team);
    res.send(team);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server Error");
  }
};
module.exports = { showMyTeam };
