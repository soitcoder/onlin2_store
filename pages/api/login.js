import User from "../../models/User"
import connectDB from "../../middleware/connectDB"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
require("dotenv").config();

const handler =async(req,res)=>{
    if(req.method=='POST'){
        // await p.save()
        let user=await User.findOne({email: req.body.email})
        var bytes  = CryptoJS.AES.decrypt(user.password, `${process.env.CRYPTO_SECRET}`)
        if(user){
            if(user.email==req.body.email && bytes.toString(CryptoJS.enc.Utf8)==req.body.password){
                let token = jwt.sign({email:user.email,name:user.name}, `${process.env.JWT_SECRET}`)
                res.status(200).json({success:true ,token})
                // res.status(200).json({success:true ,email:user.email,name:user.name})
            }
            else{
                res.status(200).json({success:false,error:"invalid credentials"})
            }
        }
        else{
            res.status(200).json({sucess:false,error:"no user found"})
        }
        
    }
    else{
        res.status(400).json({error:"error"})
    }   
}

export default connectDB(handler)