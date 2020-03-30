const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const env = require("dotenv");

// const routes = require("./routes");
const app = express();
var PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
