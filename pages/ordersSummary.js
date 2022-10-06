import React from "react";
import mongoose from "mongoose";
require("dotenv").config();
import Order from "../models/Order";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Link from "next/link";

const OrdersSummary = ({ products1 }) => {
  const order2 = products1.products;
  const [date, setDate] = useState(null);
  // console.log(order2);

  useEffect(() => {
    const current = new Date();
    const d = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    setDate(d)
  }, []);

  //  useEffect(() => {
  //    JSON.parse(JSON.stringify(order1))

  //  }, [])

  // console.log(JSON.parse(JSON.stringify(order1)))

  // let order3=Object.keys(order1)
  // setorder2(order3);
  // console.log(order3)

  return (
    <div>
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="mb-5 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Order summary
          </h1>
          <h2 className="mb-10 text-2xl lg:text-2xl font-semibold leading-7 lg:leading-9 p text-gray-800">
            {`Order ID : ${products1.orderID}`}
          </h2>
          <p className="text-base font-medium leading-6 text-gray-600">
            {date}
          </p>
          <h2>Payment Status : {products1.payment_status}</h2>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                Customer’s Cart
              </p>
              {Object.keys(order2).map((k) => {
                return (
                  <div>
                    <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                      <div className="pb-4 md:pb-8 w-full md:w-40">
                        <img
                          className="w-full hidden md:block"
                          src={order2[k].img}
                          alt="dress"
                        />
                        <img
                          className="w-full md:hidden"
                          src={order2[k].img}
                          alt="dress"
                        />
                      </div>
                      <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                          <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                            {order2[k].name}
                          </h3>
                          <div className="flex justify-start items-start flex-col space-y-2">
                            <p className="text-sm leading-none text-gray-800">
                              <span className="text-gray-300">Style: </span>{" "}
                              Italic Minimal Design
                            </p>
                            <p className="text-sm leading-none text-gray-800">
                              <span className="text-gray-300">Size: </span>{" "}
                              {`${order2[k].size}`}
                            </p>
                            <p className="text-sm leading-none text-gray-800">
                              <span className="text-gray-300">Color: </span>{" "}
                              {`${order2[k].varient}`}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-8 items-start w-full">
                          <p className="text-base xl:text-lg leading-6">
                            ₹{order2[k].price + 100}{" "}
                          </p>
                          <p className="text-base xl:text-lg leading-6 text-gray-800">
                            {order2[k].qty}
                          </p>
                          <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                            ₹{order2[k].price + 100}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-nowrap">
              <button className=" bg-transparent hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded">
                <Link href="/">Continue Shopping</Link>
              </button>
              <button className="ml-10 bg-transparent hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded">
                <Link href="/ordersHistory">Order History</Link>
              </button>
            </div>
          </div>
          <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">
              Customer
            </h3>
            <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  <img
                    src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                    alt="avatar"
                  />
                  <div className=" flex justify-start items-start flex-col space-y-2">
                    <p className="text-base font-semibold leading-4 text-left text-gray-800">
                      David Kent
                    </p>
                  </div>
                </div>

                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="cursor-pointer text-sm leading-5 text-gray-800">
                    {`${products1.email}`}
                  </p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                  <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                      Shipping Address
                    </p>
                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      {`${products1.address}`}
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                      Billing Address
                    </p>
                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      {`${products1.address}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersSummary;

export async function getServerSideProps(context) {
  await mongoose.connect(process.env.MONGO_URI);
  // console.log("connected to database ")
  // const ordernum=JSON.parse(Cookies.get('orderId'))
  // console.log(ordernum)
  let newOrder = await Order.find().sort({ _id: -1 }).limit(1);
  let newOrder1 = newOrder[0];
  // console.log(newOrder1);
  // console.log(products1)
  return {
    props: { products1: JSON.parse(JSON.stringify(newOrder1)) },
  };
}
// export async function getServerSideProps(context) {
//   await mongoose.connect(process.env.MONGO_URI)
//   // console.log("connected to database ")

//   let products1= await Product.find({category:"tshirts"})

//   let tshirts={}
//     // console.log(products1.length())
//     for(let item of products1){
//         if(item.title in tshirts){
//             if(tshirts[item.title].color.includes(item.color)==0 && item.availableQty>0){
//                 tshirts[item.title].color.push(item.color)
//             }
//             if(!tshirts[item.title].size.includes(item.size) && item.availableQty>0){
//                 tshirts[item.title].size.push(item.size)
//             }

//         }
//         else{
//             tshirts[item.title]=JSON.parse(JSON.stringify(item))
//             if(item.availableQty>0){
//                 tshirts[item.title].color=new Array(item.color)
//                 tshirts[item.title].size=new Array(item.size)
//             }
//         }

//     }
//   return {
//     props: {products1:JSON.parse(JSON.stringify(tshirts))}, // will be passed to the page component as props
//   }
// }
