const express=require('express');
const app=express()
const cookieParser = require('cookie-parser');
const path=require('path');

//Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs');
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));



app.get('/',(req,res)=>{
    res.send("hello this is starting of my project");
})

app.listen(3000);