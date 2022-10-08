import React from "react";
import Head from "next/head";
import { PayPalButton } from "react-paypal-button-v2";
import { useState, useEffect } from "react";
import {useRouter} from "next/router"
import Cookies from "js-cookie";
require("dotenv").config();

const Checkout = ({ cart, subTotal }) => {
  const router=useRouter()
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');
  const [city,setCity]=useState('');
  const [postcode,setPostcode]=useState('');
  const [products, setProducts] = useState({});
  // const [flag, setFlag] = useState(false)

  

  const preventDef=(e)=>{
    e.preventDefault();
  }
  
   const handleChange=(e)=>{
   
    if(e.target.name=='firstName'){
      setFirstName(e.target.value)
    }
    else if(e.target.name=='lastName'){
      setLastName(e.target.value)
    }
    else if(e.target.name=='email'){
      setEmail(e.target.value)
    }
    else if(e.target.name=='Address'){
      setAddress(e.target.value)
    }
    else if(e.target.name=='city'){
      setCity(e.target.value)
    }
    else if(e.target.name=='postcode'){
      setPostcode(e.target.value)
    }
   }
   useEffect(() => {
    setProducts(cart)
   }, [])
   
  //  useEffect(() => {
  //   router.push("http://localhost:3000/orders")
  //  }, [!flag])
   
   const onSuccesFunc=async (orderID,pay_status1)=>{
    
    let id = orderID
    let pay_status=pay_status1
    const data = { email,id,products,address,subTotal,pay_status };
    console.log(data);
    let res = await fetch(`/api/myOrder`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    let flag=true;
    changePage(flag);
    Cookies.set("orderId",id,{
        expires:1
      })
   }

   const changePage=(e)=>{
      if(e){
        router.push(`/ordersSummary`)
      }
   }

  const addPaypalScript = () => {
    if (window.paypal) {
      setScriptLoaded(true);
      return ;
    }
    const script = document.createElement("script");
    script.src =
      `https://www.paypal.com/sdk/js?client-id=${process.env.PAYAL_CLIENT_ID}`;

    script.type = "text/javascript";
    script.async = "true";
    script.onLoad = ()=> {setScriptLoaded(true)};
    document.body.appendChild(script);
  };

  useEffect(() => {
    addPaypalScript();
    setScriptLoaded(true)
  }, []);

  return (
    <>
      <div className="container p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <h2  className="mb-4 font-bold md:text-xl text-heading ">
              Shipping Address
            </h2>
            <form
              onChange={preventDef}
              className="justify-center w-full mx-auto"
              method="post"
              action
            >
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      onChange={handleChange}
                      value={firstName}
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                    onChange={handleChange}
                      value={lastName}
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="Email"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                    onChange={handleChange}
                      value={email}
                      name="email"
                      type="text"
                      placeholder="Email"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="Address"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Address
                    </label>
                    <textarea
                    onChange={handleChange}
                      value={address}
                      className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                      name="Address"
                      cols="20"
                      rows="4"
                      placeholder="Address"
                    ></textarea>
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="city"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      City
                    </label>
                    <input
                    onChange={handleChange}
                      value={city}
                      name="city"
                      type="text"
                      placeholder="City"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="postcode"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Postcode
                    </label>
                    <input
                    onChange={handleChange}
                      value={postcode}
                      name="postcode"
                      type="text"
                      placeholder="Post Code"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <label className="flex items-center text-sm group text-heading">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-gray-300 rounded focus:outline-none  checked:bg-black"
                    />
                    <span className="ml-2">
                      Save this information htmlFor next time
                    </span>
                  </label>
                </div>
                <div className="relative pt-3 xl:pt-6">
                  <label
                    htmlFor="note"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    {" "}
                    Notes (Optional)
                  </label>
                  <textarea
                    name="note"
                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                    rows="4"
                    placeholder="Notes htmlFor delivery"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button  className="disabled:bg-slate-500 w-full px-6 py-2 text-white bg-black">
                    {scriptLoaded ? (
                      <PayPalButton
                      
                        amount={subTotal+100}
                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                        onSuccess={(details, data) => {
                          // console.log(details)
                          let id=details.id
                          let pay_status=details.status

                          onSuccesFunc(id,pay_status)
                         
                          // OPTIONAL: Call your server to save the transaction
                          // return fetch("http://localhost:3000/api/myOrder", {
                          //   method: "post",
                          //   body: JSON.stringify({
                          //     orderID: data.orderID,
                          //   }),
                          // });
                        }}
                      />
                    ) : (
                      <span>loading...</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="mt-8">
                <div className="flex flex-col space-y-4">
                  {Object.keys(cart).map((k) => {
                    return (
                      <div key={cart[k].slug} className="flex space-x-4">
                        <div>
                          <img
                            src={cart[k].img}
                            alt="image"
                            className="w-60"
                          />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold">Title</h2>
                          <p className="text-sm">{cart[k].name}</p>
                          <span className="text-red-600">Price</span>{" "}
                          {cart[k].price}
                        </div>
                        
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex p-4 mt-4">
                <h2 className="text-xl font-bold">ITEMS 2</h2>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal<span className="ml-2">{subTotal}</span>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping Tax<span className="ml-2">₹100</span>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span className="ml-2">{subTotal + 100}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
