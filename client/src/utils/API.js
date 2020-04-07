import axios from "axios";

export default {

  getUsers: function () {
    return axios.get("/api/user");
  },

  getUsers: function (id) {
    return axios.get("/api/user/" + id);
  },
  
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },

  saveUsers: function (userData) {
    return axios.post("/api/user", userData);
  },
  // user signup / login
  loginSignup: ({username, password, email, login}) => login ? axios.post('/api/user/login', {username:username, password:password}) : axios.post('/api/user/signup', {username:username, password:password, email:email})
};
