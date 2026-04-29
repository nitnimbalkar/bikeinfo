const mongoose=require("mongoose");

const ownerSchema=mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true,
    },
    email: String,
    password: String,
    bikes:{
        type:Array,
        default:[],
    },
    brands:{
        type:Array,
        default:[],
    },
    oProfileimg : String,
});

module.exports=mongoose.model("Owner",ownerSchema);