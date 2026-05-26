const bikeModel=require("../models/bikeModel");
const isLoggedIn=require("../middlewares/isLoggedIn");


module.exports.addbike = async (req, res) => {

    try {

        let {
            brand,
            bname,
            engineCapacity,
            gears,
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
            vWarentyKm
        } = req.body;

        // Required field validation
        if (!brand || !bname || !engineCapacity || !gears) {

            return res.status(400).json({
                success: false,
                message: "Please fill all required fields"
            });

        }

        let addBike = await bikeModel.create({

            brand,
            bname,
            engineCapacity,
            gears,
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
            vWarentyKm

        });

        return res.status(201).json({
            success: true,
            message: "Bike Added Successfully",
            bike: addBike
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};




// module.exports.addbike=async(req,res)=>{
//     let {brand,name,engineCapacity,gears,isAvailableIndia,bProfileImg,
//     bikeImgs,bReview,mileage,weight,fuelTankCapacity,seatHeight,maxPower,
//     maxTorque,noOfCylinder,compressRatio,emissionStandard,fuelType,qShifter,
//     mConnect,gps,tracControl,cControl,serCost,fService,sService,tService,
//     sInterval,vWarentyKm}=req.body;
    
//     let addBike= await bikeModel.create({
//         brand,
//         name,
//         engineCapacity,
//         gears,
//         isAvailableIndia,
//         bProfileImg,
//         bikeImgs,
//         bReview,
//         mileage,
//         weight,
//         fuelTankCapacity,
//         seatHeight,
//         maxPower,
//         maxTorque,
//         noOfCylinder,
//         compressRatio,
//         emissionStandard,
//         fuelType,
//         qShifter,
//         mConnect,
//         gps,
//         tracControl,
//         cControl,
//         serCost,
//         fService,
//         sService,
//         tService,
//         sInterval,
//         vWarentyKm,

//     });
//     res.status(201).send("Bike Added");
// }




