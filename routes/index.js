const express=require("express");
const router=express.Router();
const isloggedin=require("../middlewares/isLoggedIn");

router.get("/",(req,res)=>{
    let error = req.flash("error");
    res.render("index",{error});
});

router.get("/",(req,res)=>{
    res.render('index');
});

module.exports=router;