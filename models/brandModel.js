const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  brandOrigin: {
    type: String,
    required: true,
    trim: true
  },

  brandImage: {
    type: String,
    default: ""
  },

  bikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bike"
    }
  ],

  brandNews: {
    type: String
  },

  brandNewsImg: {
    type: String
  }

}, { timestamps: true });

module.exports = mongoose.model("Brand", brandSchema);