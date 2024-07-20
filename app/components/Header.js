import React from "react";
import Image from "next/image";
// import anime from "../../public/images/logo.png";
import logo from "../../public/images/logo.jpg";
import DynamicBg from "./DynamicBg";
const Header = () => {
  const images = [
    "../../images/1.jpg",
    "../../images/2.jpg",
    "../../images/3.jpg",
    "../../images/Home_background.jpg",
    "../../images/13.jpg",
    "../../images/12.jpg",
    "../../images/5.jpg",
    "../../images/home_backround.jpg"
  ]
  return (
    <header>
      <DynamicBg images={images} />
      <div
        className="sm:pd-16 py-16 flex justify-center, lg:items-center
    max-lg:flex-col w-full sm:gap-16 gap-0"
      >
        <div className="flex flex-col gap-7">
          <h1 className=" px-2 sm:text-4xl md:text-5xl text-6xl text-white lg:max-w-lg font-bold flex flex-col leading-[120%]">
            Explore your{" "}
            <span className="red-gradient animate-pulse">
              favourite Anime's{" "}
            </span>
            at your peak.
          </h1>
        </div>
      </div>
      {/* <div className="justify-center -right-28 w-full h-[50vh] lg:flex-1 relative ">
        <Image src={anime} alt="logo" fill className="object-contain " />
      </div> */}
      {/* </DynamicBg> */}
    </header>
  );
};

export default Header;
