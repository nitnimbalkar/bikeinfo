const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    rBike: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bike",
        required: true
    },

    rcontent: {
        type: String,
        required: true,
        trim: true
    },

    upvote: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        }
    ],

    downvote: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        }
    ],

    date: {
        type: Date,
        default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);