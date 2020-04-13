const router = require("express").Router();
const userController = require("../../controllers/userController");
const db = require("../../models");
const passport = require('../../config/passport');

// /api/user - get all users
router.get("/", (req, res, next) => {
    console.log("===== user!!======");
    console.log(req.user);
    if (req.user) {
        res.json({ user: req.user });
    } else {
        res.json({ user: null });
    }
});

// /api/user/signup - Post a new user with hashed password
router.route("/signup")
    .post(userController.create)

router.post("/logout", (req, res) => {
    if (req.user) {
        console.log("logout", req.user)
        req.logout();
        res.send({ msg: "logging out" });
    } else {
        res.send({ msg: "no user to log out" });
    }
});

router.post("/login", passport.authenticate('local'), (req, res) => {
    res.json(req.user)
})

// Matches with ":id"
router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

module.exports = router;