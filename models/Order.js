const mongoose = require('mongoose');

const ProductSchema=new mongoose.Schema({
    email:{ type: String, required:true},
    orderID:{ type: String ,required:true},
    products:{type:Object,required:true},
    address:{type:String,required:true},
    amount:{type:Number , required:true},
    payment_status: {type:String,required:true}

},{timestamps:true})

mongoose.models={}

export default mongoose.model("Order",ProductSchema);