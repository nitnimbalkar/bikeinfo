const mongoose=require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    firstName:String,
    lastName:String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age:Number,
    city:String,
    bikes:{
        type:Array,
        default:[]
    },
    userProfileimg:String,
    userReview:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"
    }]

});

module.exports=mongoose.model("User",userSchema);