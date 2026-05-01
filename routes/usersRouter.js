const express=require('express');
const router = express.Router();
const userModel=require("../models/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken"); 


router.get("/",(req,res)=>{
    res.render("signup");
})

router.post("/register",(req,res)=>{
    try{
        let {username,firstname,lastname,email,age,city,password} = req.body;

        bcrypt.genSalt(10, function(err,salt){
            bcrypt.hash(password,salt,async function(err,hash){
                if (err) return res.send(err.message);
                else{
                    let user = await userModel.create({
                        username,
                        firstname,  
                        lastname, 
                        email,
                        age,
                        city,
                        password:hash,
                        }); 
                        let token=jwt.sign({email,id:user._id},"jwtsecreat");
                        res.cookie("token",token);
                        res.send("User Created Successfully");
                }

            });
        });
    }catch(err) {
        console.log(err.message); 
    }

})

module.exports=router;