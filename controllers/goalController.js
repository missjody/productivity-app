const db = require("../models");
const userModel = require("../controllers/userController")

// Defining methods for the GoalsController
module.exports = {
    findAll: function (req, res) {
        db.Goal
            .find()
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Goal
            .find({ author: req._passport.session.user._id })
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        req.body.author = req._passport.session.user._id
        console.log(req._passport.session.user._id)
        db.Goal.create(req.body)
            .then((dbModel) => {
                res.json(dbModel);
            })
            .catch(err => {
                res.json(err);
            });
    },
    update: function (req, res) {
        db.Goal
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateTask: function (req, res) {
        db.Goal
            .findOneAndUpdate({ "_id": req.body._id }, // Filter
                { $push: { Tasks: req.body.Tasks } }, // Update
                { new: true }
            )
            .then(dbModel => {
                console.log(dbModel)
                res.json(dbModel);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    },
    remove: function (req, res) {
        db.Goal
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

