import Product from "../../models/Product"
import connectDB from "../../middleware/connectDB"

const handler =async(req,res)=>{
    if(req.method=='POST'){
        for(let i=0;i<req.body.length;i++){
        let p=await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
        
        }
        
        res.status(200).json({sucess:"sucess"})
    }
    else{
        res.status(400).json({error:"error"})
    }
    
}

export default connectDB(handler)