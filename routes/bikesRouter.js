const express=require('express');
const router = express.Router();
const bikeModel=require("../models/bikeModel");
const { addbike } = require('../controllers/bikeController');
const upload = require("../config/multerConfig");


router.get("/",async(req,res)=>{
    res.render("indexCopy.ejs");
})
router.get("/userprofile",(req,res)=>{
    res.render("userProfileTest.ejs");
})
router.get("/bikeview",(req,res)=>{
    res.render("bikeview.ejs");
})
router.get("/addbike",async(req,res)=>{
    res.render("addbike.ejs");
})
router.get("/newscopy",(req,res)=>{
    res.render("newscopy.ejs");
})
router.get("/review",async(req,res)=>{
    res.render("userReview.ejs");
})
router.get("/news",async(req,res)=>{
    res.render("news.ejs");
})
router.get("/addbike",(req,res)=>{
    res.render("addbike.ejs");
})


// main addbike post route
router.post("/add-bike",upload.fields([
    { name: "bProfileImg", maxCount: 1 },
    { name: "bikeImgs", maxCount: 10 },
  ]),addbike);

module.exports = router;




