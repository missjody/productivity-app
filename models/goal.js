const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const options = { toJSON: { virtuals: true } };

const goalSchema = new Schema({
    goal: { type: String, trim: true, required: "no empty goal names" },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
    targetDate: { type: Date, default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000) },
    completeTime: {
        type: Date,
        default: Date.now
    },
    Tasks: [
        {
            name: {
                type: String,
                trim: true,
                required: "no empty task names"
            },
            createdAt: {
                type: Date,
                default: Date.now
            },
            startDate: {
                type: Date,
                default: Date.now
            },
            targetDate: {
                type: Date,
                default: () => new Date(+new Date())
            },
            complete: {
                type: Boolean,
                default: false
            },
            completeTime: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, options);

//Count Tasks and bring back percentage complete
goalSchema.virtual("percentage").get(function () {
    var count = this.Tasks.reduce((accumulator, { complete }) => {
        if (complete) {
            return accumulator + 1
        }
        else {
            return accumulator
        }

    }, 0)
    if (this.Tasks.length === 0) {
        return 0 + "%"
    } else {
        var percent = (count / this.Tasks.length) * 100;
        return parseInt(percent) + "%"
    }
});


const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;