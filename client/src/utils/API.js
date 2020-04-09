import axios from "axios";

export default {
  // Gets all books
  getGoals: function () {
    return axios.get("/api/goal");
  },
  // Gets the book with the given id
  getGoalsbyUser: function (id) {
    return axios.get("/api/goal/user");
  },
  // Saves a book to the database
  saveGoal: function (goalData) {
    return axios.post("/api/goal", goalData);
  },
  getUsers: function () {
    return axios.get("/api/user");
  },
  // Saves a book to the database
  saveTask: function (id, TaskData) {
    console.log("ID from utils/api", TaskData)
    return axios.put("/api/goal/" + id, TaskData);
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
  loginSignup: ({ username, password, email, login }) => login ? axios.post('/api/user/login', { username: username, password: password }) : axios.post('/api/user/signup', { username: username, password: password, email: email })
};
