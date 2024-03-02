import React from "react";
import Image from "next/image";
// import anime from "../../public/images/logo.png";
import logo from "../../public/images/logo.jpg";
const Header = () => {
  return (
    <header className=" bg-home_bg bg-cover bg-no-repeat  ">
      <div className=" grid justify-center items-center py-4">
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={30}
          className="rounded-full object-fill border-2 border-s-2 border-y-green-400"
        ></Image>
      </div>
      <div
        className="sm:pd-16 py-16 flex justify-center, lg:items-center
    max-lg:flex-col w-full sm:gap-16 gap-0"
      >
        <div className="flex flex-col gap-10">
          <h1 className=" px-2 sm:text-4xl md:text-5xl lg:text-6xl text-white lg:max-w-lg font-bold lg:leading-[120%]">
            Watch your{" "}
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
    </header>
  );
};

export default Header;
