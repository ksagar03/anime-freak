"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Button } from "@mui/material";

export const MotionDiv = motion.div;
export const FramerImage = motion(Image);

// export const handleClick = (id) => {
//   setAnimeSelected(id);
// };

export const Btn = (uniqueId) => {
  const [animeSelected, setAnimeSelected] = useState(null);
  return (
    <Button
      sx={{ color: "#FFAD49" }}
      onClick={() => setAnimeSelected(uniqueId)}
    >
      <DoubleArrowIcon className=" animate-pulse" />
    </Button>
  );
};
// export const ShowMoreBtn = () => {
//   const [showMore, setShowMore] = useState(false);
//   const sbutton = () => {
//     return (
//       <button
//         onClick={() => {
//           setShowMore(!showMore);
//           console.log(showMore);
//         }}
//         className="font-bold rounded-xl text-center px-4 p-2 border-2 text-[#FFAD49] "
//       ></button>
//     );
//   };
//   return { sbutton, showMore };
// };

export const DiscriptionView = ({ description }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <p
        className={`text-pretty px-4 ${
          showMore ? "" : "truncate line-clamp-5"
        }`}
      >
        {description}
      </p>
      {description.length < 100 ? (
        ""
      ) : (
        <div className="flex flex-row justify-end mx-12 mt-2 md:justify-center md:mx-0">
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
            className="font-bold rounded-xl text-center px-4 p-2 border-2 text-[#FFAD49] "
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
};
