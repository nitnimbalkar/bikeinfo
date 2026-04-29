const express=require('express');
const app=express()
const cookieParser = require('cookie-parser');
const path=require('path');
const db=require("./config/mongo-connection");

//Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs');
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));



app.get('/',(req,res)=>{
    res.render("signup");
})

app.listen(3000);