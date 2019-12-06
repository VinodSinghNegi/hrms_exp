const express = require("express");
require("./src/config/db/mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const userRouters = require("./src/api/users/user.routers");
// const users = require("./routes/api/users");
const app = express();
const departmentRouter = require("./src/api/department/department.router");
const designationSeeder = require("./src/config/seeds/designationseeder");
const kraAttributesSeeder = require("./src/config/seeds/kra_attributesSeeder");
const adminSeeder = require("./src/config/seeds/adminseeder");
const departmentSeed = require("./src/config/seeds/departmentseeder");
const kraRouter = require("./src/api/kraSheets/krasheetRouters");
const showemploye = require("./src/api/admin/admin_routers/admin_router");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes


app.use(showemploye)
app.use(userRouters);
app.use(kraRouter);
app.use(departmentRouter);
app.use(departmentSeed);
app.use(designationSeeder);
app.use(kraAttributesSeeder);
app.use(adminSeeder);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
