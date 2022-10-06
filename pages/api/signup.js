import User from "../../models/User"
import connectDB from "../../middleware/connectDB"
var CryptoJS = require("crypto-js");

const handler =async(req,res)=>{
    if(req.method=='POST'){
        // await p.save()
        // console.log(req.body)
        const {name,email}=req.body
        let u=new User({name,email,password:CryptoJS.AES.encrypt(req.body.password, `${process.env.CRYPTO_SECRET}`).toString()})
        await u.save()
        res.status(200).json({sucess:"sucess"})
    }
    else{
        res.status(400).json({error:"error"})
    }   
}

export default connectDB(handler)