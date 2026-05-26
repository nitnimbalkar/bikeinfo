const bikeModel=require("../models/brandModel");
const isLoggedIn=require("../middlewares/isLoggedIn");

module.exports.addbrand=async(req,res)=>{
    let {brandName,brandOrigin,brandImage,brandNews,bikes,brandNewsImage}=req.body;
    try{
        if (!brandName || !brandOrigin) {

            return res.status(400).json({
                success: false,
                message: "Please fill all required fields"
            });

            }
            let addbrand=await bikeModel.create({
                brandName,
                brandOrigin,
                brandImage,
                brandNews,
                bikes,
                brandNewsImage
            });
            return res.status(201).json({
                success: true,
                message: "Brand Added Successfully",
                bike: addbrand
            });
    }catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
}