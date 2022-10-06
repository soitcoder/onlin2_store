import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import mongoose from "mongoose";
require("dotenv").config();
import Product from "../../models/Product";
import { useRef } from "react";
 import { ToastContainer, toast } from 'react-toastify';
 import Cookies from "js-cookie";
 import Link from "next/link";
 require("dotenv").config();
 

const Post = ({ addToCart, product, varients }) => {
  const ref = useRef();

  
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [Servicebility, setServicebility] = useState(null);
  const [color, setColor] = useState(product.color);
  const [size, setSize] = useState(product.size);

  // console.log( varients);
  // console.log(product)

  const inputHandler = (e) => {
    setPin(e.target.value);
  };

  const checkServicebility = async () => {
    const pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
    const pinsJson = await pins.json();
    console.log(pinsJson);
    if (pinsJson.includes(parseInt(pin))) {
      setServicebility(true);
    } else {
      setServicebility(false);
    }
    console.log(Servicebility);
  };

  const colorChange=(e)=>{
    
    setColor(e)
    console.log(e)
    let s=Object.keys(varients[e])
    // console.log(product.title)

    setSize(s);
    // console.log((varients['Yellow']['L']['slug']))
    refreshVarient(e,s[0]) 
  }

  const refreshVarient=(newColor,newSize)=>{
    // console.log(newSize)
    // let t=product.title
    // let u=t+'-'+newSize+'-'+newSize
    let url=`${process.env.NEXT_PUBLIC_HOST}/products/${varients[newColor][newSize]['slug']}`
    router.push(url)
  }

  return (
    <>
      <section className="text-gray-500 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Vogue
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"  
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-500 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>

                  {Object.keys(varients).includes("White") &&
                    // Object.keys(varients["White"]).includes(size) && (
                      (
                      <button
                        // onClick={()=>{refreshVarient('White',size)}}
                        onClick={()=>{colorChange("White")}}
                        className={`border-2 border-gray-500 rounded-full ml-1 w-6 h-6 focus:outline-none`}
                      ></button>
                    )}

                  {Object.keys(varients).includes("Red") &&
                    // Object.keys(varients["Red"]).includes(size) && 
                    (
                      <button
                        // onClick={()=>{refreshVarient('Red',size)}}
                        onClick={()=>{colorChange("Red")}}
                        className={`border-2 border-gray-500 bg-red-500 rounded-full ml-1 w-6 h-6 focus:outline-none`}
                      ></button>
                    )}

                  {Object.keys(varients).includes("Purple") &&
                    // Object.keys(varients["Purple"]).includes(size) &&
                     (
                      <button
                        // onClick={()=>{refreshVarient('Purple',size)}}
                        onClick={()=>{colorChange("Purple")}}
                        className={`border-2 border-gray-500 bg-purple-500 rounded-full ml-1 w-6 h-6 focus:outline-none`}
                      ></button>
                    )}

                 
                  {Object.keys(varients).includes("Blue") &&
                    // Object.keys(varients["Blue"]).includes(size) && 
                    (
                      <button
                        // onClick={()=>{refreshVarient('Blue',size)}}
                        onClick={()=>{colorChange("Blue")}}
                        className={`border-2 border-gray-500 bg-blue-500 rounded-full ml-1 w-6 h-6 focus:outline-none`}
                      ></button>
                    )}
                    {Object.keys(varients).includes("Green") &&
                    // Object.keys(varients["Blue"]).includes(size) && 
                    (
                      <button
                        // onClick={()=>{refreshVarient('Blue',size)}}
                        onClick={()=>{colorChange("Green")}}
                        className={`border-2 border-gray-500 bg-green-500 rounded-full ml-1 w-6 h-6 focus:outline-none`}
                      ></button>
                    )}


                     {Object.keys(varients).includes("Yellow") &&
                    // Object.keys(varients["Yellow"]).includes(size) && 
                    (
                      <button
                      // onClick={()=>{refreshVarient('Yellow',size)}}
                      onClick={()=>{colorChange("Yellow")}}
                        className={`border-2 border-gray-500 bg-yellow-500 rounded-full ml-1 w-6 h-6 focus:outline-none`}
                      ></button>
                    )}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select value={size} onChange={(e)=>{refreshVarient(color,e.target.value)}} className="rounded border appearance-none border-gray-500 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10">
                      {Object.keys(varients[color]).includes('S') && <option value={'S'}>S</option>}
                      {Object.keys(varients[color]).includes('M') && <option value={'M'}>M</option>}
                      {Object.keys(varients[color]).includes('L') && <option value={'L'}>L</option>}
                      {Object.keys(varients[color]).includes('XL') && <option value={'XL'}>XL</option>}
                      {Object.keys(varients[color]).includes('XXL') && <option value={'XXL'}>XXL</option>}
                     
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-500 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div classNameName="flex-col">
                <span classNameName="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
                <button
                  onClick={() => {
                    let price=product.price
                    
                    addToCart(
                      slug,
                      1,
                      price,
                      product.title,
                      product.size,
                      product.color,
                      product.img
                    );
                  }}
                  className="flex mt-6 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded"
                >
                  Add To Cart
                </button>

                {Cookies.get("token") ?<Link href={"/checkout"}><button
                  onClick={() => {
                    let price=product.price
                    
                    addToCart(
                      slug,
                      1,
                      price,
                      product.title,
                      product.size,
                      product.color,
                      product.img
                    );
                  }}
                  className="flex mt-6 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded"
                >
                  Buy Now
                </button></Link>: <Link href={`${process.env.NEXT_PUBLIC_HOST}/signup`}><button
                  
                  className="flex mt-6 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded"
                >
                  Buy Now
                </button></Link>}
                
                {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button> */}
                <div className> Check if your pincode is serviceable</div>
                <div className="pincode flex">
                 
                  <input
                    onChange={inputHandler}
                    type="text"
                    className="rounded-md mt-6 mr-3 border-solid border-2 border-black"
                  ></input>
                  <button
                    onClick={checkServicebility}
                    className="flex mt-6 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded"
                  >
                    check
                  </button>
                </div>
                {Servicebility != null && (
                  <div>
                    {Servicebility ? (
                      <h3 className="text-green-300">
                        we deliver to this pincode
                      </h3>
                    ) : (
                      <h3 className="text-red-300">
                        sorry! we don't deliver to this pincode yet
                      </h3>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  await mongoose.connect(process.env.MONGO_URI);

  // let str1=context.query.slug
  // for(i=0;i<str1.length;i++){
  //   if(str1[i]=='-'){
  //     str1=str1.substring(0,i);
  //     break;
  //   }
  // }
  // let colors=await Product.findOne({  });
  let product = await Product.findOne({ slug: context.query.slug });
  let varients = await Product.find({ title: product.title });
  let colorSizeSlug = {};
  for (let item of varients) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
  }

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      varients: JSON.parse(JSON.stringify(colorSizeSlug)),
    }, // will be passed to the page component as props
  };
}
