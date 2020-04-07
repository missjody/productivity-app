const router = require("express").Router();
const userController = require("../../controllers/userController");
const db = require("../../models");

// /api/user - get all users
router.route("/")
    .get(userController.findAll)

// /api/user/signup - Post a new user with hashed password
router.route("/signup")
    .post(userController.create)

// Matches with ":id"
router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

module.exports = router;