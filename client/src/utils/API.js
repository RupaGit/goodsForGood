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
  emailuser: function (userid) {
    return axios.post("/api/emailUser" + userid);
  }
};

