const mongoose = require('mongoose');

const ProductSchema=new mongoose.Schema({
    title:{type:String,required:true},
    slug:{type:String,required:true,unique:true},
    img:{type:String,reqired:true},
    category:{type:String,required:true},
    size:{type:String},
    color:{type:String},
    price:{type:Number,required:true},
    availableQty:{type:Number,required:true},
},{timestamps:true})

mongoose.models={}

export default mongoose.model("Product",ProductSchema);