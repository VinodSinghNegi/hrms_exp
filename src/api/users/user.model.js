const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const userSchema = new mongoose.Schema({
  _id: {
    type: Number,
    AutoIncrement: true,
    primaryKey: true
  },
  prefix: {
    type: String,
    default: "A"
  },
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    retuired: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  password: {
    type: String,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("password cannot contain 'password' ");
      }
    }
  },
  designation_id: {
    type: mongoose.Schema.Types.ObjectId,
    trim: true,
    required: true,
    ref: "Designation"
  },
  department_id: {
    type: mongoose.Schema.Types.ObjectId,
    trim: true,
    ref: "Department"
  },
  reportingManager: {
    type: Number,
    ref: "User"
  },

  dateOfJoining: {
    type: Date,
    default: new Date()
  },

  jobStatus: {
    type: String,
    default: "working"
  },
  gender: {
    type: String
  },
  kraAttributes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "kraAttributes"
    }
  ],
  token: {
    type: String
  }
});

userSchema.plugin(AutoIncrement, { inc_field: "_id", prefix: "v" });

// userSchema.methods.generateAuthToken = async function() {
//   const user = this;
//   const user2=await user
//     .select("-password -__v")
//     .populate("kraAttributes designation_id department_id reportingManager", [
//       "name"
//     ]);
//   const token = jwt.sign({ _id: user._id, user2 }, "secretKey", {
//     expiresIn: 86400
//   });
//   user.token = token;
//   await user.save();
//   return token;
// };

userSchema.pre("save", async function(next) {
  const user = this;
  user.password = (await user.name) + user.dateOfJoining.getFullYear();
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
