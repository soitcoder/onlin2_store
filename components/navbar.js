import React from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { IoBagCheckFill } from "react-icons/io";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

const Navbar = ({
  Logout,
  key,
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const ref1 = useRef();
  const ref2 = useRef();
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  // console.log(cart)

  const toggleCart = () => {
    if (ref1.current.classList.contains("translate-x-full")) {
      ref1.current.classList.remove("translate-x-full");
      ref1.current.classList.add("translate-x-0");
    } else {
      ref1.current.classList.remove("translate-x-0");
      ref1.current.classList.add("translate-x-full");
    }
  };

  const dropDown = () => {
    if (ref2.current.classList.contains("hidden")) {
      ref2.current.classList.remove("hidden");
    } else {
      ref2.current.classList.add("hidden");
    }
  };

  return (
    <div >
      <header className="text-gray-400  body-font shadow-md ">
        <div className="container  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  ">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
            <img
              src="https://img.icons8.com/plasticine/344/lazada.png"
              className="h-7"
              alt="logo"
            />
            <Link href="/">
              <span className="ml-3 text-xl text-gray-400">Vogue</span>
            </Link>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
            <Link href="/tshirts">
              <a className="mr-5 hover:text-black">T-Shirts</a>
            </Link>
            <Link href="/hoodies">
              <a className="mr-5 hover:text-black">Hoodies</a>
            </Link>
            <Link href="/pants">
              <a className="mr-5 hover:text-black">Pants</a>
            </Link>
            <Link href="/mugs">
              <a className="mr-5 hover:text-black">Mugs</a>
            </Link>
            <div onClick={toggleCart}>
              <AiOutlineShoppingCart className="hover:text-black" />
            </div>
            {user.value && (
              <div className="ml-7 ">
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      onClick={dropDown}
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      <MdAccountCircle className="text-lg" />
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    ref={ref2}
                    className=" hidden z-20 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <Link href="/account">
                        <a
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          My Account
                        </a>
                      </Link>
                      <Link href="/ordersHistory">
                        <a
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                        >
                          Orders
                        </a>
                      </Link>
                      <button
                        onClick={Logout}
                        className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-slate-100"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-3"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="ml-7">
              {!user.value && (
                <Link href="/login">
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </header>
      {/* <div className="absolute top-0 right-0"> */}
        <div
          ref={ref1}
          className="sidecart  h-full absolute top-0 right-0  bg-slate-600 z-10 p-10 pr-20 transform transition-transform translate-x-full "
        >
          <div className=" text-xl font-bold ">shopping cart </div>
          <div onClick={toggleCart}>
            <AiFillCloseCircle className="absolute top-6 right-6 text-xl cursor-pointer" />
          </div>
          <ol className="pt-3 list-decimal ">
            {Object.keys(cart).length == 0 && (
              <div className="">No items in the cart</div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="flex">
                    <div className="mr-12">
                      <span className="mr-4">{cart[k].name}</span>
                      <span className="mr-4">
                        ({cart[k].varient},{cart[k].size})
                      </span>
                    </div>
                    <div className="flex justify-center items-center space-x-4">
                      <span className="cursor-pointer">
                        <AiFillPlusCircle
                          onClick={() => {
                            addToCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].varient
                            );
                          }}
                        />
                      </span>
                      <span>{cart[k].qty}</span>
                      <span className="cursor-pointer">
                        <AiFillMinusCircle
                          onClick={() => {
                            removeFromCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].varient
                            );
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="flex">
            {/* <Link href={"/checkout"}>
           <button class="flex mt-6 mr-3 text-white bg-black border-0 py-2 px-6 focus:outline-none rounded">checkout</button>
              </Link> */}
            {Cookies.get("token") ? (
              <Link href={"/checkout"}>
                <button className="flex mt-6 mr-3 text-white bg-black border-0 py-2 px-6 focus:outline-none rounded">
                  checkout
                </button>
              </Link>
            ) : (
              <Link href={"/signup"}>
                <button className="flex mt-6 mr-3 text-white bg-black border-0 py-2 px-6 focus:outline-none rounded">
                  checkout
                </button>
              </Link>
            )}
            <button
              onClick={clearCart}
              className="flex mt-6 text-white bg-black border-0 py-2 px-6 focus:outline-none rounded"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Navbar;
