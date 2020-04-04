//we import passport packages required for authentication
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

//
//We will need the models folder to check passport agains
var db = require("../models");
//
// Telling passport we want to use a Local Strategy. In other words,
//we want login with a username/email and password
passport.use(
  new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "email"
    },
    function(email, password, done) {
      // When a user tries to sign in this code runs
      db.User.findOne({
        email: email
      }).then(function(dbUser) {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          });
        }

        // Match password
        bcrypt.compare(password, dbUser.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            console.log(dbUser);
            return done(null, dbUser);
          } else {
            return done(null, false, { message: "Password incorrect" });
          }
        });
      });
    }
  )
);
//
// In order to help keep authentication state across HTTP requests,
// Mongo needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});
//
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
//
// Exporting our configured passport
module.exports = passport;
