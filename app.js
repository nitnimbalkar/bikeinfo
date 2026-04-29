const express=require('express');
const app=express()


app.get('/',(req,res)=>{
    res.send("hello this is starting of my project");
})

app.listen(3000);