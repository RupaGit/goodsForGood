const nodemailer = require("../config/nodemailer");
var db = require("../models");
var bcrypt = require("bcrypt");
var passport = require("../config/passport");
var path = require("path");

module.exports = function(app) {
  app.post("/api/emailUser", (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var content = `name: ${name} \n email: ${email} \n message: ${content} `;
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json(req.user.id);
  });

  //To register a new user, user signUp call. In this method, we will check if the user is inputting the email and password.
  //If the email or password are null, we throw validation. Also, there is password validation and if its less than 6 char long, we throw validation.
  app.post("/api/signUp", function(req, res) {
    const { email, password } = req.body;
    let errors = [];
    if (!email || !password) {
      errors.push({ msg: "Please enter all fields" });
    }
    if (password.length < 6) {
      errors.push({ msg: "Password must be at least 6 characters" });
    }
    if (errors.length > 0) {
      res.json("Please populate all values");
    } else {
      db.User.findOne({ email: email }).then(user => {
        if (user) {
          errors.push({ msg: "Email already exists" });
          res.json("User already exists");
        } else {
          const newUser = new db.User({
            email: req.body.email,
            password: req.body.password
          });
          newUser.save().then(dbUser => {
            res.json("User Created");
          });
        }
      });
    }
  });

  // Route for logging user out
  app.get("/api/logout", function(req, res) {
    req.logout();
    res.json("User logged out successfully");
  });
  //
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
