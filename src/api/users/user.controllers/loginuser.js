const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../../../config/keys");
const validateLoginInput = require("../../../../validation/login");
const user = require("../../users/user.model");

const login = async (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  user.findOne({ email }).then(async User => {
    // Check if user exists
    if (!User) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, User.password).then(async isMatch => {
      if (isMatch) {
        const user2 = await user
          .findById(User._id)
          .select("-password -__v")
          .populate(
            "kraAttributes designation_id department_id reportingManager",
            ["name"]
          );

        const payload = {
          userdata: { _id: user2._id }
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 86400 // 1 day in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              userdata: user2
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
};

module.exports = { login };
