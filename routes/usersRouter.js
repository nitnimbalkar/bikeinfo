const express=require('express');
const router = express.Router();
const userModel=require("../models/userModel");

router.get("/",(req,res)=>{
    res.render("signup");
})

router.post("/register",async(req,res)=>{
    try{
        let {username,firstname,lastname,email,age,city,password} = req.body;
        let user = await userModel.create({
        username,
        firstname,
        lastname,
        email,
        age,
        city,
        password,
        });
        res.send(user);
    }catch(err) {
        console.log(err.message); 
    }

})


module.exports=router;