const express=require('express');
const router = express.Router();
const ownerModel=require("../models/ownerModel");

 router.post("/create",async(req,res)=>{
    let owners= await ownerModel.find();
    if(owners.length > 0){
        return res.send(503).send("Owner Already Exist..You dont have permission to create new one");
    }

    let {fullname,email,password}=req.body;
    let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
    });
    res.status(201).send("Owner Created");

});

router.get("/",(req,res)=>{
    res.render("signup");
})


module.exports=router;  