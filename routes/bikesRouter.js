const express=require('express');
const router = express.Router();
const bikeModel=require("../models/bikeModel");

router.get("/",async(req,res)=>{
    let user= await userModel.findOne({email,user:user._id});
    res.render("index",{user});
})

router.post("/create", async(req,res)=>{
    let {brand,name,isAvailableIndia,engineCapacity,transmission}=req.body;
    let addBike= await bikeModel.create({
        brand,
        name,
        engineCapacity,
        transmission,

    });
    res.status(201).send("Bike Added");
});


module.exports=router;