import "../styles/globals.css";
import { useState,useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import {useRouter} from "next/router"
import Cookies from "js-cookie";
function MyApp({ Component, pageProps }) {

  const router=useRouter()
  // const showHeader= router.pathname=='/login'||'/signup'? false:true
  // const showFooter= router.pathname=='/login'||'/signup'? false:true
  

  const [cart,setCart]=useState({});
  const [subTotal,setSubTotal]=useState(0);
  const [user,setUser]=useState({value:null})
  const [key,setKey]=useState()
  

  useEffect(()=>{
    try{
      if(Cookies.get("cart")){
        setCart(JSON.parse(Cookies.get("cart")))
      }
      if(Cookies.get("total")){
        setSubTotal(total)
      }
    }catch(error){
      console.log(error)
      Cookies.remove('cart')
      Cookies.remove('total')
    }
    const token=Cookies.get('token')
    if(token){
      setUser({value:token})
      setKey(Math.random())
    }
    
  },[router.query])

  const logout=()=>{
    Cookies.remove('token')
    setUser({value:null})
  }

  const saveCart=(newCart)=>{
   console.log(newCart)
    // localStorage.setItem("cart",JSON.stringify(newCart)); 
    Cookies.set("cart",JSON.stringify(newCart),{
        expires:7
      })
    
    let total=0;
    let keys=Object.keys(cart)
    for(let i=0;i<Object.keys(newCart).length;i++){
      total+=newCart[keys[i]].qty*newCart[keys[i]].price
    }
    // console.log(total)
    setSubTotal(total);
    // localStorage.setItem("total",subTotal)
    Cookies.set("total",subTotal,{
        expires:7
      })
    console.log(subTotal)
    // console.log(cart)
    // console.log(localStorage)
  }

  const addToCart=(itemCode,qty,price,name,size,varient,img)=>{
    let newCart=cart;
    console.log(newCart)
    if(itemCode in cart){
      newCart[itemCode].qty=cart[itemCode].qty+qty;
    }
    else{
      newCart[itemCode]={qty:1,price,name,size,varient,img}
    }

    setCart(newCart);
    //  console.log(cart);
    saveCart(cart);

  }

  const removeFromCart=(itemCode,qty,price,name,size,varient,img)=>{
    let newCart=cart;
    if(itemCode in cart){
      newCart[itemCode].qty=cart[itemCode].qty-qty;
    }
    if(newCart[itemCode].qty<=0){
      delete newCart[itemCode];
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart=()=>{
    setCart({});
    saveCart({});
  }
 
  return (
    <div className="w-screen">
      {/* {showHeader && <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />} */}
      <Navbar Logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
      <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
      {/* {showFooter && <Footer/>} */}
      <Footer/>
    </div>
  );
}

export default MyApp;
