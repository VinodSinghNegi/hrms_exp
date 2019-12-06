var express = require("express");
const { check, validationResult } = require("express-validator");
var router = express.Router();
const adminauth = require("../middleware/adminauth");
const userauth = require("../middleware/userauth");

const { addUser } = require("./user.controllers/adduser");
const { login } = require("./user.controllers/loginuser");
const { logout } = require("./user.controllers/logoutuser");
const { showme } = require("./user.controllers/showProfile");
const { forget } = require("./user.controllers/forgetpassword");
const { verify } = require("./user.controllers/verifypasswrd");
const { changePass } = require("./user.controllers/changepassword");
const { seeds } = require("./user.controllers/seeds");
const { getuserdata } = require("./user.controllers/getuserdata");
router.post(
  "/adduser",
  [
    // adminauth,
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "please include valid email").isEmail()
    // check("password","Please enter a password with 6 or more characters").isLength({  min:6})
  ],
  addUser
);
router.post("/login", login);
router.get("/getuserdata", getuserdata);
// router.post("/logout", userauth, logout);
router.get("/showme", userauth, showme);
router.post("/forgetPassword", forget);
router.get("/verify/:token", verify);
router.post("/changepassword", changePass);
router.get("/getseeds", adminauth, seeds);

module.exports = router;
