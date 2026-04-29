const mongoose=require("mongoose");

const reviewSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    rBike:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"bike"
    },
    rcontent:String,
    upvote:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    downvote:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    date:{
        type:Date,
        default:Date.now()
    }

});

module.exports=mongoose.model("review",reviewSchema);