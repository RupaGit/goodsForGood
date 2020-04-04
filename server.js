const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const env = require("dotenv");

// const routes = require("./routes");
const app = express();
var PORT = process.env.PORT || 4000;

var db = require("./models");
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/goodsForGood", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
require("./config/passport");
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

app.use(passport.initialize());

app.use(passport.session());
require("./routes/apiRoutes.js")(app);
// require("./routes/loginRoute.js")(app);
// require("./routes/htmlRoutes.js")(app);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
