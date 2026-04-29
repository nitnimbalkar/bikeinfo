const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({

    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "brand",
        required: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    bProfileImg: {
        type: String,
        default: ""
    },

    isAvailableIndia: {
        type: Boolean,
        default: true
    },

    engineCapacity: {
        type: Number,
        required: true
    },

    bikeImgs: [
        {
        type: String
        }
    ],

    bReview: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
        }
    ],

    mileage: {
        type: Number
    },

    transmission: {
        type: String,
        required: true
    },

    weight: {
        type: Number
    },

    fuelTankCapacity: {
        type: Number
    },

    seatHeight: {
        type: Number
    },

    maxPower: {
        type: String
    },

    maxTorque: {
        type: String
    },

    noOfCylinder: {
        type: Number,
        default: 1
    },

    compressRatio: {
        type: String
    },

    emissionStandard: {
        type: String
    },

    fuelType: {
        type: String,
        enum: ["Petrol", "Power", "XP100"]
    },

    qShifter: {
        type: Boolean,
        default: false
    },

    mConnect: {
        type: Boolean,
        default: false
    },

    gps: {
        type: Boolean,
        default: false
    },

    tracControl: {
        type: Boolean,
        default: false
    },

    cControl: {
        type: Boolean,
        default: false
    },

    serCost: {
        type: Number
    },

    fService: {
        type: Number
    },

    sService: {
        type: Number
    },

    tService: {
        type: Number
    },

    sInterval: {
        type: Number
    },

    vWarentyKm: {
        type: Number
    }

}, { timestamps: true });

module.exports = mongoose.model("Bike", bikeSchema);