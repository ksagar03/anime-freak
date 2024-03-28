"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Button } from "@mui/material";

export const MotionDiv = motion.div;

// export const handleClick = (id) => {
//   setAnimeSelected(id);
// };

export const Btn = (uniqueId) => {
   const [animeSelected, setAnimeSelected] = useState(null);
  return (
    <Button sx={{ color: "#FFAD49" }} onClick={ () => setAnimeSelected(uniqueId)
    }>
      <DoubleArrowIcon className=" animate-pulse" />
    </Button>
  );
};
