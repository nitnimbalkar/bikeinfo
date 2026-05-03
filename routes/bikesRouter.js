const express=require('express');
const router = express.Router();
const userModel=require("../models/userModel");

router.get("/",async(req,res)=>{
    let user= await userModel.findOne({email,user:user._id});
    res.render("index",{user});
})


module.exports=router;