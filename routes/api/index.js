const router = require("express").Router();
const userRoutes = require("./user");
const goalRoutes = require("./goals");


//User routes?
router.use("/user", userRoutes);

//Goals routes?
router.use("/goal", goalRoutes);

module.exports = router;
