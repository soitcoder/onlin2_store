import Product from "../../models/Product"
import connectDB from "../../middleware/connectDB"

const handler =async(req,res)=>{
    let products=await Product.find({category:"tshirts"})
    let tshirts={}
    // console.log(products.length())
    for(let item of products){
        if(item.title in tshirts){
            if(tshirts[item.title].color.includes(item.color)==0 && item.availableQty>0){
                tshirts[item.title].color.push(item.color)
            }
            if(!tshirts[item.title].size.includes(item.size) && item.availableQty>0){
                tshirts[item.title].size.push(item.size)
            }

        }
        else{
            tshirts[item.title]=JSON.parse(JSON.stringify(item))
            if(item.availableQty>0){
                tshirts[item.title].color=new Array(item.color)
                tshirts[item.title].size=new Array(item.size)
            }
        }
        
    }
    // console.log(tshirts["vogue-2"].availablety)
    res.status(200).json({tshirts})
}

export default connectDB(handler)