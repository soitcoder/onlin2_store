import React from "react";
import mongoose from "mongoose";
require('dotenv').config()
import Product from "../models/Product";
import Link from "next/link";

const Tshirt = ({products}) => {
  
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-2 py-24 mx-auto ">
          <div className="flex flex-wrap justify-center -m-4">
            {Object.keys(products).map((k)=>{
              return <Link key={products[k]._id} href={`/products/${products[k].slug}`} >
              <div className="lg:w-1/5 md:w-1/2 p-8 m-2 w-full shadow-lg hover:shadow-xl cursor-pointer ">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block  "
                  src={products[k].img}
                />
              </a>
              <div className="mt-4 flex flex-col justify-center items-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {products[k].category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {products[k].title}
                </h2>
                <p className="mt-1">₹{products[k].price}</p>
                <div className="flex justify-center ">
                {products[k].size.map((s)=>{
                  return <p  key={Math.random()} className="mt-1 mr-4 border-2 p-1 border-gray-400">{s}</p>
                  
                })}
                
                </div>
                <div className="flex mt-4 ">
                {products[k].color.map((c)=>{
                  return <button key={Math.random()}className={` border-2 border-gray-500 ml-1 bg-${c.toLowerCase()}-500 rounded-full w-6 h-6 focus:outline-none `}></button>
                  
                })}
                
                </div>
                
              </div>
            </div>
            </Link> 
            })}
            
            
          </div>
        </div>
      </section>
    </div>
  );
};
export default Tshirt;


export async function getServerSideProps(context) {
  await mongoose.connect(process.env.MONGODB_URI)
  // console.log("connected to database ")

  let products= await Product.find({category:"tshirts"})

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
    // console.log(tshirts)
  return {
    props: {products:JSON.parse(JSON.stringify(tshirts))}, // will be passed to the page component as props
  }
} 