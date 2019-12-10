const Notification = require("./notification.model");
const getNotification = async (req, res) => {
  try {
    const notification = await Notification.find({ to: req._id })
      .populate("to from", "name -_id")
      .populate("typeId", "-_id -__v")
      .select("-__v")
      .sort({ date: -1 });
    if (!notification) {
      return res.status(400).send("No notification found");
    }
    res.send(notification);
  } catch (error) {
    console.log(error.message);

    res.status(500).send("server error");
  }
};
module.exports = { getNotification };
