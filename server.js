const express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
const mongoose = require("mongoose");
const morgan = require('morgan');
const dbConnection = require('./models'); 
const MongoStore = require('connect-mongo')(session);
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const user = require('./routes/api/user');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({ secret: "piano-cat", store: new MongoStore({ url: process.env.MONGODB_URI || 'mongodb://localhost/surata', ttl: 24*3600 }), resave: true, saveUninitialized: true }));
app.use(passport.initialize());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/surata', {useNewUrlParser:true, useFindAndModify:false})
app.use(routes);

// Routes
app.use('/user', user)

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
