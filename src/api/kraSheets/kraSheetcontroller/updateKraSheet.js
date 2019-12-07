const KraSheetModel = require("../krasheetmodel");
const updatekramanager = async (req, res) => {
  console.log("in viewkramanager");
  try {
    console.log(req.body);
    const { krasheetId, kraAttributes } = req.body;
    let kra2 = await KraSheetModel.findOne(
      { "kraSheet._id": krasheetId },
      { "kraSheet.$": 1 }
    );
    if (kra2.kraSheet[0].Status === "Approved") {
      return res.status(404).send("Kra Already Status");
    }

    kra = await KraSheetModel.findOneAndUpdate(
      { "kraSheet._id": krasheetId },
      {
        $set: {
          "kraSheet.$.Status": "Approved",
          "kraSheet.$.kraAttributes": kraAttributes
        }
      },
      {
        new: true
      }
    );

    res.json(kra);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server");
  }
};
module.exports = { updatekramanager };
