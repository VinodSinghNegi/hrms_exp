const User = require("../../users/user.model");
const KraSheetModel = require("../krasheetmodel");
const Addkra = async (req, res) => {
  console.log("addkra", req.body);
  try {
    let kra = await KraSheetModel.findOne({ userId: req.user._id });
    if (!kra) {
      kra = await new KraSheetModel({
        userId: req.user._id,
        reportingManagerId: req.user.reportingManager
      });
      kra.kraSheet.unshift({ kraAttributes: req.body.kradata });
      await kra.save();
      // kra=await kra.populate("kraSheet.kraAttributes[0].Attributesid",["name"])
      return res.send(kra);
    }
    const currentYear = kra.kraSheet[0].date.getFullYear();
    const currentMonth = kra.kraSheet[0].date.getMonth();

    // console.log(currentMonth==new Date().getMonth());

    if(currentMonth==new Date().getMonth() && currentYear==new Date().getFullYear()){
        return res.status(404).send({errmsg:"kra already done"})
    }

    kra.kraSheet.unshift({ kraAttributes: req.body.kradata });
    await kra.save();
    res.json(kra);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("ha");
  }
};

module.exports = { Addkra };
