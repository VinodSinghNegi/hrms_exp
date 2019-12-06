const User = require("../../users/user.model");
const KraSheetModel = require("../krasheetmodel");
const Viewkra = async (req, res) => {
  console.log("in viewkra");

  try {
    let kra = await KraSheetModel.findOne({ userId: req._id }).select("-_id");
    if (!kra) {
      return res.status(400).send("No Kra found");
    }
    res.json(kra);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server");
  }
};

module.exports = { Viewkra };
