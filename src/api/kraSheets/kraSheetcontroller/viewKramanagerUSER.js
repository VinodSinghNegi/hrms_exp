const KraSheetModel = require("../krasheetmodel");
const viewKramanagerUser = async (req, res) => {
  console.log("in viewkramanager");

  try {
    const kra = await KraSheetModel.findOne(
      { "kraSheet._id": req.params.id },
      { "kraSheet.$": 1 }
    );
    if (!kra) {
      return res.status(400).send("No Kra found");
    }
    res.json({ kra });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};
module.exports = { viewKramanagerUser };
