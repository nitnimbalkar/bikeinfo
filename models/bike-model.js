const mongoose=require('mongoose');


const bikeSchema=mongoose.Schema({

    brand : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"brand"
    },

    bProfileImg : String,
    isAvailableIndia : Boolean,
    engineCapacity : Number,
    bikeImgs :[
        {
            type:String
        }
    ],
    bReview : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"review"
    }],
    mileage : Number,
    transmission : Number,
    weight : Number,
    fuelTankCapacity : Number,
    seatHeight : Number,
    maxPower : String,
    maxTorque : String,
    noOfCylinder : Number,
    compressRatio : String,
    emissionStandard : String,
    fuelType : String,
    qShifter : Boolean,
    mConnect : Boolean,
    gps : Boolean,
    tracControl : Boolean,
    cControl : Boolean,
    serCost : Number,
    fService : Number,
    sService : Number,
    tService : Number,
    sInterval : Number,
    vWarentyKm : Number
});

module.exports=mongoose.model("bike",bikeSchema);