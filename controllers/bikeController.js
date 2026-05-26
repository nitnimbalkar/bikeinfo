const bikeModel=require("../models/bikeModel");
const isLoggedIn=require("../middlewares/isLoggedIn");

module.exports.addbike=async(req,res)=>{
    let {brand,name,engineCapacity,transmission,isAvailableIndia,bProfileImg,
    bikeImgs,bReview,mileage,weight,fuelTankCapacity,seatHeight,maxPower,
    maxTorque,noOfCylinder,compressRatio,emissionStandard,fuelType,qShifter,
    mConnect,gps,tracControl,cControl,serCost,fService,sService,tService,
    sInterval,vWarentyKm}=req.body;
    
    let addBike= await bikeModel.create({
        brand,
        name,
        engineCapacity,
        transmission,
        isAvailableIndia,
        bProfileImg,
        bikeImgs,
        bReview,
        mileage,
        weight,
        fuelTankCapacity,
        seatHeight,
        maxPower,
        maxTorque,
        noOfCylinder,
        compressRatio,
        emissionStandard,
        fuelType,
        qShifter,
        mConnect,
        gps,
        tracControl,
        cControl,
        serCost,
        fService,
        sService,
        tService,
        sInterval,
        vWarentyKm,

    });
    res.status(201).send("Bike Added");
}




