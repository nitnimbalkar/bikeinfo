const userModel=require("../models/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken"); 
const {generateToken }=require("../utils/generateToken");

module.exports.registerUser = async (req,res)=>{
    try{
        let {username,firstname,lastname,email,age,city,password} = req.body;

        let user =await userModel.findOne({email:email})
        
        if(user)
            return res.status(401).send("User Already Registred");

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

module.exports.loginUser =  async (req,res)=>{
    let {email,password} = req.body;

    let user = await userModel.findOne({ email:email });
    if(!user) return res.status(400).send("Email or Password Incorrect");

    bcrypt.compare(password, user.password, function (err, result){
        if(result==true){
            let token = generateToken(user);
            res.cookie("token",token);
            res.send("You are logged in");
        }else{
            res.status(400).send("Email or Password Incorrect");
        }
    })
};

module.exports.logout= async (req,res)=>{
    req.cookie("token","");
    res.redirect("/");
}