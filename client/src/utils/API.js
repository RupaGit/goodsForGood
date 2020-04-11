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
  Trades: function (tradeData) {
    return axios.post("/api/trade", tradeData);
  }
};

