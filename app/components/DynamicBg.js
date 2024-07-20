"use client";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";

import React from "react";

const DynamicBg = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-cover duration-1000 -z-20" style = {{ backgroundImage: `url(${images[imageIndex]})` }}>
    </div>
  );
};

export default DynamicBg;
