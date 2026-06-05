const express=require('express');
const router = express.Router();
const { registerUser, loginUser,logout} = require('../controllers/authController');
const bikeModel=require("../models/brandModel");
const brandModel = require('../models/brandModel');


// router.get("/",async(req,res)=>{
//     let brand= await brandModel.findOne({brandName});
//     res.render("signup",{brand});
// })

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/logout",logout);

router.get("/profile",(req,res)=>{
    res.render("userProfileTest.ejs");
})

module.exports=router;