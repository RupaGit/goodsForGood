// var db = require("../models");
var bcrypt = require("bcrypt");
var passport = require("../config/passport");
var path = require("path");
var nodemailer = require('nodemailer');
const mongoose = require("mongoose");



const systemEmail = 'goodforgooods@gmail.com';
const systemPassword = 'RupaGuyJavis123';

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: systemEmail,
    pass: systemPassword
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

module.exports = function (app, db) {
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json(req.user.id);
  });

  app.post('/api/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    // var message = req.body.message
    var content = "HI GUY WE GOT THIS STUPID THING WORKING"//`name: ${name} \n email: ${email} \n message: ${content} `
    var mail = {
      from: systemEmail,
      to: email,  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })

  //To register a new user, user signUp call. In this method, we will check if the user is inputting the email and password.
  //If the email or password are null, we throw validation. Also, there is password validation and if its less than 6 char long, we throw validation.
  app.post("/api/signUp", function (req, res) {
    console.log("user data passed to api routes", req.body);
    const { name, email, password, zipCode } = req.body;
    let errors = [];
    if (!name || !email || !password || !zipCode) {
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
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            zipCode: req.body.zipCode
          });
          newUser.save().then(dbUser => {
            res.json("User Created");
          });
        }
      });
    }
  });
  app.post("/api/emailUser", (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${content} `
  })
  // Route for logging user out
  app.get("/api/logout", function (req, res) {
    req.logout();
    res.json("User logged out successfully");
  });
  //
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      db.User.findOne({ email: req.user.email }).
        then(user => {
          console.log("User info in user_data is", user);
          res.json({
            name: user.name,
            email: user.email,
            zipCode: user.zipCode,
            id: user._id
          });
        });
    }
  });


  //Create a trade
  app.post("/api/createTrade", (req, res, next) => {
    db.Trade
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

  app.get("/api/getTrades/:userId", function (req, res) {
    console.log(req.params.userId)
    db.Trade.find({ userId: req.params.userId })
      .then(tradeData => res.json(tradeData))
      .catch(err => res.status(422).json(err));
  });



  app.put("/api/deleteTrades/:tradeId", function (req, res) {
    db.Trade.findOneAndUpdate({ _id: req.params.tradeId }, { isDeleted: true })
      .then(tradeData => res.json(tradeData))
      .catch(err => res.status(422).json(err));
  });

  // making a edit api
  app.put("/api/editTrades/:newTradeId", function (req, res) {
    // console.log(newTrade,req.params.userId)
    db.Trade.findOneAndUpdate({ _id: req.params.newTradeId }, {
      reqItem: req.body.reqItem,
      reqItemQty: req.body.reqItemQty,
      availItem: req.body.availItem,
      availItemQty: req.body.availItemQty
    })
      .then(tradeData => { console.log("Trade data is ", tradeData); res.json(tradeData) })
      .catch(err => res.status(422).json(err));
  })

  //API call to get all trades matching the browser's location
  app.get("/api/getTradesByLoc/zipcode=:zipCode", function (req, res) {
    console.log("Zip code ins api routes", req.params.zipCode)
    db.Trade.find({ zipCode: req.params.zipCode })
      .then(tradeData => res.json(tradeData))
      .catch(err => res.status(422).json(err));
  });


  //API call to get Filtered trades when a user is logged in
  app.get("/api/getFilteredTrades/zipcode=:zipCode&id=:userId", function (req, res) {
    console.log("Zip code ins api routes", req.params.zipCode)
    db.Trade.find({ zipCode: req.params.zipCode, userId: { $ne: mongoose.Types.ObjectId(req.params.userId) } })
      .then(tradeData => res.json(tradeData))
      .catch(err => res.status(422).json(err));
  });

  //Route to mark a trade as favorite
  app.put("/api/addToFavorites", (req, res) => {
    console.log("request data in api routes", req.body);
    db.User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { favoriteTrades: req.body.tradeId } },
      { new: true })
      .then(userData => res.json(userData))
      .catch(err => res.status(422).json(err));
  });

  //Route to get pending trades by user id
  app.get("/api/getPendingTrades/:userId", (req, res) => {
    console.log()
    db.User.findOne({ _id: mongoose.Types.ObjectId(req.params.userId) })
      .populate("pendingTrades")
      .then(userData => {
        console.log("user data is ", userData.pendingTrades);
        res.json(userData.pendingTrades)
      })
      .catch(err => res.status(422).json(err));
  });

  //route to mark a trade as complete
  app.put("/api/completeTrade", (req, res) => {
    console.log()
    db.User.findOneAndUpdate(
      { _id: req.body.userId },
      { $pull: { pendingTrades: req.body.tradeId } }
    )
      .then(userData =>
        db.User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { completedTrades: req.body.tradeId } },
          { new: true })
          .then(userData => res.json(userData))
          .catch(err => res.status(422).json(err)));
  });

  app.put("/api/removePendingTrade", (req, res) => {
    console.log()
    db.User.findOneAndUpdate(
      { _id: req.body.userId },
      { $pull: { pendingTrades: req.body.tradeId } }
    )
      .then(userData => res.json(userData))
      .catch(err => res.status(422).json(err));
  });


  // route to get favorite trades by user id
  app.get("/api/getFavoriteTrades/:userId", (req, res) => {
    console.log()
    db.User.findOne({ _id: mongoose.Types.ObjectId(req.params.userId) })
      .populate("favoriteTrades")
      .then(userData => {
        console.log("user data is ", userData.favoriteTrades);
        res.json(userData.favoriteTrades)
      })
      .catch(err => res.status(422).json(err));
  });

  //To get sent messages by a user
  app.get("/api/getMessages/:id", (req, res) => {
    db.Messages.find({ $or: [{ receiver: mongoose.Types.ObjectId(req.params.id) }, { sender: mongoose.Types.ObjectId(req.params.id) }] })
      .then(receivedMessages => {
        console.log("messages received by user are", receivedMessages);
        res.json(receivedMessages)
      })
      .catch(err => res.status(422).json(err));
  });

  app.post("/api/addFeed", (req, res) => {
    db.Feeds
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

  //To get community Feed by zip code
  app.get("/api/getCommunityFeed/:zipCode", (req, res) => {
    db.Feeds.find({ zipCode: req.params.zipCode })
      .then(feedData => {
        console.log("Feeds are", feedData);
        res.json(feedData)
      })
      .catch(err => res.status(422).json(err));
  });

  app.put("/api/increaseLikes/:feedId", (req, res) => {
    db.Feeds.findOneAndUpdate({ _id: req.params.feedId }, { $inc: { likes: 1 } }, { new: true })
      .then(response => {
        res.json(response)
      })
      .catch(err => res.status(422).json(err));
  });
  app.put("/api/increaseDislikes/:feedId", (req, res) => {
    db.Feeds.findOneAndUpdate({ _id: req.params.feedId }, { $inc: { dislikes: 1 } }, { new: true })
      .then(response => {
        res.json(response)
      })
      .catch(err => res.status(422).json(err));
  });


};
