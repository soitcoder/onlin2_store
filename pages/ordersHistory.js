import React from "react";
import Link from "next/link";
import mongoose from "mongoose";
require("dotenv").config();
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { getDisplayName } from "next/dist/shared/lib/utils";
require("dotenv").config();

const Ordersum3 = () => {
  const router = useRouter();
  const [orders1, setOrders1] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/orders`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: Cookies.get("token") }),
      });
      let res = await response.json();
      // console.log(res);
      setOrders1(res.orders);
      //   console.log(res)
    };

    if (!Cookies.get("token")) {
      router.push("/");
    } else {
      fetchOrders();
    }
  }, []);

  // const getName=(k)=>{
  //   let o1=(Object.values(k.products)[0].name)
  //   return o1
  // }

  // const getQty=(k)=>{
  //   let o1=(Object.values(k.products)[0].qty)
  //   return o1
  // }

  // const getprice=(k)=>{
  //   let o1=(Object.values(k.products)[0].price)
  //   return o1
  // }
  //   console.log(orders1[0].products)
  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
          Order History
        </h1>
      </div>
      {orders1.map((k) => {
        return (
          <div key={k._id} className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
            <div
             
              className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8"
            >
              <div className="flex flex-col justify-start items-start border-4 border-slate-500 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                  Order Id: {k.orderID}
                </p>
                {Object.keys(k.products).map((item) => {
                  return (
                    <div key={Math.random()} className="w-full flex flex-nowrap">
                      {" "}
                      <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                        <div className="pb-4 md:pb-8 w-full md:w-40">
                          <img
                            className="w-full hidden md:block"
                            src={k.products[item].img}
                            alt="dress"
                          />
                          <img
                            className="w-full md:hidden"
                            src={k.products[item].img}
                            alt="dress"
                          />
                        </div>

                        <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                          <div className="w-full flex flex-col justify-start items-start space-y-8">
                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                              {k.products[item].name}
                              {/* {getName(k)} */}
                            </h3>
                            <div className="flex justify-start items-start flex-col space-y-2">
                              <h1>quantity : {k.products[item].qty}</h1>
                              <h1>price : ${k.products[item].price}</h1>
                              <h1>color : {k.products[item].varient}</h1>
                              {/* <h1>quantity: {getQty(k)}</h1>
                    <h1>price : ${getprice(k)}</h1> */}
                            </div>
                          </div>
                          <div className=" flex">
                            <button className=" mb-5 text-xl bg-transparent w-52 h-20 hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded">
                              <Link href="/">Track your Order</Link>
                            </button>
                            <button className=" bg-transparent text-xl w-52 h-20 ml-6 mr-6 hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded">
                              <Link href="/OrdersSummary">
                                view order details
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ordersum3;

// export async function getServerSideProps(context) {
//   await mongoose.connect(process.env.MONGO_URI);
//   // console.log("connected to database ")
//   // const ordernum=JSON.parse(Cookies.get('orderId'))
//   // console.log(ordernum)
//   let newOrder = await Order.find().sort({ _id: -1 }).limit(1);
//   let newOrder1 = newOrder[0];
//   // console.log(newOrder1);
//   // console.log(products1)
//   return {
//     props: { products1: JSON.parse(JSON.stringify(newOrder1)) },
//   };
// }
