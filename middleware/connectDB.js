import mongoose from "mongoose"
require('dotenv').config()



const connectDB= handler =>async(req,res)=>{
    
    await mongoose.connect(process.env.MONGODB_URL)
    return handler(req,res)
}

// console.log('connected to DB')

export default connectDB