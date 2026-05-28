const express=require('express');
const router = express.Router();
const userModel=require("../models/userModel");
const { addbrand } = require('../controllers/brandController');
const upload = require("../config/multerConfig");

router.get("/",async(req,res)=>{
    let user= await userModel.findOne({email,user:user._id});
    res.render("signup",{user});
})

//Brand add Route
router.post("/add-brand",upload.single("brandImage"),addbrand);


router.get("/addbrand",(req,res)=>{
    res.render("addBrand.ejs");
})

module.exports=router;
