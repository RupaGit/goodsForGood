import axios from "axios";

export default {
  // Sign up a user
  signUp: function (userData) {
    console.log("userdata is ", userData);
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
    console.log("this is the Lat and long in api.js", coords);
    return axios.get("https://api.opencagedata.com/geocode/v1/json?key=283cd48cf9414122b30fa8584eb872ee&q=" + coords.lat + "+" + coords.lng);
  },
  getTradesByUserId: function (userId) {
    console.log(userId);
    return axios.get("/api/getTrades/" + userId);
  },

  deleteTradeByID: function (tradeID) {
    console.log("this is the  Delet userid", tradeID);
    return axios.put("/api/deleteTrades/" + tradeID);
  },

  editUserTradeByID: function (tradeData, tradeID) {
    console.log("this is the  Delet tradeID", tradeID);
    return axios.put("/api/editTrades/" + tradeID, tradeData);
  },

  getAllTradesByLoc: function (zipCode) {
    console.log("Zip code in utils", zipCode);
    console.log("query url", "/api/getTradesByLoc/zipcode=" + zipCode);
    return axios.get("/api/getTradesByLoc/zipcode=" + zipCode);
  },
  getFilteredTrades: function (zipCode, userId) {
    console.log("Zip code in utils", zipCode);
    console.log("query url", "/api/getFilteredTrades/zipcode=" + zipCode + "&id=" + userId);
    return axios.get("/api/getFilteredTrades/zipcode=" + zipCode + "&id=" + userId);
  },
  addToFavorites: function (data) {
    console.log(data);
    return axios.put("/api/addToFavorites", data);
  },
  getPendingTrades: function (userId) {
    console.log("I am in api pending trades");
    return axios.get("/api/getPendingTrades/" + userId);
  },
  completeTrade: function (data) {
    return axios.put("api/completeTrade", data);
  },
  removePendingTrade: function (data) {
    return axios.put("api/removePendingTrade", data);
  },
  getFavoriteTrades: function (userId) {
    return axios.get("/api/getFavoriteTrades/" + userId);
  },
  getMessages: function (userId) {
    return axios.get("/api/getMessages/" + userId);
  },
  getCommunityFeed: function (zipCode) {
    return axios.get("/api/getCommunityFeed/" + zipCode);
  },
  increaseLikes: function (feedId) {
    return axios.put("/api/increaseLikes/" + feedId);
  },
  increaseDislikes: function (feedId) {
    return axios.put("/api/increaseDislikes/" + feedId);
  },
  createFeed: function (feedData) {
    console.log(feedData)
    return axios.post("/api/addFeed", feedData);
  }
};

