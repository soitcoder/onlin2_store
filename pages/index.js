import Head from "next/head";
import Image from "next/image";
import Featured6 from "../components/featured"


import HomeCarousal from "../components/HomeCarousal";

export default function Home() {
  return (
    <div >
      <HomeCarousal />
      <div className=" w-screen h-16"></div>
      <Featured6/>
      <div className=" w-screen h-60"></div>
    </div>
  );
}
