const express = require("express");
const mongoose = require("mongoose");
const http = require('http');
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const env = require("dotenv");
const cors = require('cors');
var db = require("./models");
const socketIO = require("socket.io");



// const routes = require("./routes");
const app = express();
var PORT = process.env.PORT || 4000;
const server = http.createServer(app);
const io = socketIO(server, { transports: ['polling', 'websocket'] });

var db = require("./models");
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/goodsForGood", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

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
require("./routes/apiRoutes.js")(app, db);

io.on("connection", socket => {
  socket.on("new message", data => {
    console.log(db);
    db.Messages.create(data)
      .then(dbMessage => {
        console.log(dbMessage)
        db.User.findOneAndUpdate(
          { _id: data.sender },
          { $addToSet: { pendingTrades: data.tradeId } },
          { new: true })
          .then(userData => { return userData })
          .catch(err => { throw err })
      })
      .catch(err => console.log(err));
  })

  socket.on("new response", data => {
    console.log(db);
    db.Messages.findOneAndUpdate(
      { _id: data.messageId },
      { $push: { responses: { responseSender: data.sender, responseSenderName: data.senderName, responseReceiver: data.receiver, responseMessage: data.responseMessage } } },
      { new: true })
      .then(messageData => { console.log(messageData); return messageData })
      .catch(err => { throw err })
  })

});

// require("./routes/htmlRoutes.js")(app);

// Start the API server
server.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
