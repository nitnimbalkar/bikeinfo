const express=require('express');
const router = express.Router();
const bikeModel=require("../models/bikeModel");

router.get("/",async(req,res)=>{
    let user= await userModel.findOne({email,user:user._id});
    res.render("index",{user});
})

router.post("/create", async(req,res)=>{
    let addBike= await bikeModel.create({
        
    })
})


module.exports=router;