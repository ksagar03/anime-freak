import React from "react";
import Image from "next/image";
import anime from "../../public/images/logo.png";
const Header = () => {
  return (
    <header
      className="bg-home_bg bg-center bg-cover bg-no-repeat sm:pd-16 py-16 flex justify-center, lg:items-center
    max-lg:flex-col w-full sm:gap-16 gap-0"
    >
      <div className=" flex-1 flex flex-col gap-10">
        <h1 className=" px-2 sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Watch your{" "}
          <span className="red-gradient animate-pulse">favourite Anime's </span>
          at your peak.
        </h1>
      </div>
      {/* <div className="justify-center -right-28 w-full h-[50vh] lg:flex-1 relative ">
        <Image src={anime} alt="logo" fill className="object-contain " />
      </div> */}
    </header>
  );
};

export default Header;
