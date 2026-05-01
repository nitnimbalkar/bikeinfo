const userModel=require("../models/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken"); 
const {generateToken }=require("../utils/generateToken");

module.exports.registerUser = (req,res)=>{
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
                        let token = generateToken(user);
                        res.cookie("token",token);
                        res.send("User Created Successfully");
                }

            });
        });
    }catch(err) {
        console.log(err.message); 
    }

};