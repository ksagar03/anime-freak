import React from "react";
import Image from "next/image";
import episode_view from "../../public/episodes_view.svg";
import star from "../../public/stars_icons.svg";
import { Btn, MotionDiv } from "./ClientSide";
import { Button } from "@mui/material";
import KeyboardDoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import Link from "next/link";
const AnimeCard = ({
  animeImage,
  animeName,
  animeKind,
  animeAired,
  animeEpisodes,
  animeScore,
  index,
  uniqueId,
  onClicked,
}) => {
  const varients = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <MotionDiv
      className="max-w-am rounded relative w-full"
      // variants={varients}
      // initial="hidden"
      // animate="visible"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ once: true }}
    >
      <div className="relative lg:w-full h-[50vh] xl:h-[45vh] md:h-[40vh]">
        <Image
          src={animeImage}
          alt={animeName}
          fill
          className="rounded-xl"
          priority
        />
      </div>
      <div className="py-5 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {animeName}
          </h2>

          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize ">
              {animeKind}
            </p>
          </div>
        </div>
        <div className=" flex justify-between">
          <div className="flex gap-3 items-center">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={episode_view}
                alt="episodes"
                width={20}
                height={20}
                className=" object-contain"
              />
              <p className="text-base text-white font-bold">
                {animeEpisodes || "Airing"}
              </p>
            </div>
            <div className=" flex flex-row gap-2 items-center">
              <Image
                src={star}
                alt="star icon"
                width={20}
                height={20}
                className=" object-contain animate-spin-slow"
              />
              <p className="text-base font-bold text-[#FFAD49]">{animeScore}</p>
            </div>
          </div>
          {/* <button onClick={handleClick(uniqueId)}>View more</button> */}
          <Link href={"/" + uniqueId}>
            <Button sx={{ color: "#FFAD49" }}>
              <KeyboardDoubleArrowRight className=" animate-pulse" />
            </Button>
          </Link>
          {/* <Btn uniqueId={uniqueId} /> */}
        </div>
      </div>
    </MotionDiv>
  );
};

export default AnimeCard;
