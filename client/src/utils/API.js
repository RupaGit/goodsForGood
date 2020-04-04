import axios from "axios";

export default {
  // Sign up a user
  signUp: function() {
    return axios.post("/api/signUp", userData);
  },
  // Sign in a user
  signIn: function() {
    return axios.post("/api/signIn", userData);
  },
  emailuser: function(userid) {
    return axios.post("/api/emailUser" + userid);
  }
};
r;
