const KraSheetModel = require("../krasheetmodel");
const viewkramanager = async (req, res) => {
  console.log("in viewkramanager");

  try {
    let kra = await KraSheetModel.find({ reportingManagerId: req._id }).select(
      "-_id"
    );
    if (!kra) {
      return res.status(400).send("No Kra found");
    }
    res.json({ kra });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server");
  }
};
module.exports = { viewkramanager };
