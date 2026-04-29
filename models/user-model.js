const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/bikeinfo");

const userSchema = mongoose.Schema({
    username:String,
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    age:Number,
    city:String,
    bikes:{
        type:Array,
        default:[]
    },
    isAdmin:Boolean,
    userProfileimg:String,
    userReview:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"review"
    }]

});

module.exports=mongoose.model("user",userSchema);