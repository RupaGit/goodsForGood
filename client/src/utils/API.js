import axios from "axios";

export default {
  // Sign up a user
  signUp: function (userData) {
    return axios.post("/api/signUp", userData);
  },
  // Sign in a user
  logIn: function (userData) {
    console.log("User data is ", userData);
    return axios.post("/api/login", userData);
  },
  getUserData: function () {
    return axios.get("api/user_data");
  },
  logout: function () {
    return axios.get("api/logout");
  },
  // Create a trade
  createTrade: function (tradeData) {
    console.log("The created trade data is ", tradeData);
    return axios.post("/api/login", tradeData);
  },
  emailuser: function (userid) {
    return axios.post("/api/emailUser" + userid);
  },
  noderMailer: function (userData) {
    return axios.post("/api/send", userData);
  },
  createTrade: function (tradeData) {
    console.log("this is the TradeData", tradeData);
    return axios.post("/api/createTrade", tradeData);
  },
  zipLocation: function (coords) {
    console.log("this is the Lat and long in api.js",coords);
    return axios.get("https://api.opencagedata.com/geocode/v1/json?key=283cd48cf9414122b30fa8584eb872ee&q="+coords.lat+"+"+coords.lng);
  },
  getTradesByUserId: function (userId) {
    console.log(userId);
    return axios.get("/api/getTrades/" + userId);
  }
};

