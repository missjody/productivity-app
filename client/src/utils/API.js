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
  deleteGoal: function (id) {
    console.log("API/utils Goal id: ", id)
    return axios.delete("/api/goal/" + id);
  },
  // Saves a book to the database
  saveTask: function (id, TaskData) {
    console.log("ID from utils/api", TaskData)
    return axios.put("/api/goal/" + id, TaskData);
  },
  updateTask: function (id, TaskData) {
    return axios.put('/api/goal/taskupdate/' + id, { tId: TaskData.tId, data: TaskData })
  },
  completeTask: function (id, TaskData) {
    console.log("From utils/api COMPLETE TASK:", TaskData)
    return axios.put("/api/goal/task/" + id, TaskData);
  },
  removeTask: function (id, TaskData) {
    console.log("From utils/api for remove", TaskData)
    return axios.put("/api/goal/task-remove/" + id, TaskData);
  },
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
  logout: function () {
    return axios.post("/api/user/logout");
  },
  // see if user is logged in
  status: function () {
    return axios.get('/api/user')
  },
  // user signup / login
  loginSignup: ({ username, password, email, login }) => login ? axios.post('/api/user/login', { username: username, password: password }) : axios.post('/api/user/signup', { username: username, password: password, email: email })
};
