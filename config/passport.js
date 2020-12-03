var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password"
  },
  function (username, password, done) {
    // console.log(username, password)
    // When a user tries to sign in this code runs
    db.User.findOne({
      username: username
    }).then(function (dbUser) {
      // console.log(dbUser)
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password, dbUser.password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
  // console.log("DeserializeUser called");
  db.User.findOne({
    _id: id
  }, "username", (err, user) => {
    // console.log
    ("--------------");
    done(null, user);
  });
});


// Exporting our configured passport
module.exports = passport;
