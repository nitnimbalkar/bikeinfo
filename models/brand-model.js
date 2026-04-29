const mongoose=require('mongoose');

const brandSchema=mongoose.Schema({
    brandName:String,
    brandOrigin:String,
    bikes:{
        type:Array,
        default:[]
    },
    brandImage:String,
    brandNews:String,
    brandNewsImg:String

})

module.exports=mongoose.model("brand",brandSchema);