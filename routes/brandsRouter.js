const express=require('express');
const router = express.Router();
const userModel=require("../models/userModel");
const { addbrand } = require('../controllers/brandController');

router.get("/",async(req,res)=>{
    let user= await userModel.findOne({email,user:user._id});
    res.render("signup",{user});
})

router.post("/create",addbrand);


module.exports=router;