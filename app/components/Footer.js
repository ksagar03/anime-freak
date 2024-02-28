import Image from "next/image";

import React from "react";

const Footer = () => {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-center items-center flex-wrap bg-[#161921]">
      <p className="text-base font-bold, text-white">
        {new Date().getFullYear()} &copy; Anime freak
      </p>
    </footer>
  );
};

export default Footer;
