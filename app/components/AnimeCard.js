import React from "react";
import Image from "next/image";
import episode_view from "../../public/episodes_view.svg";
import star from "../../public/stars_icons.svg";
const AnimeCard = ({
  animeImage,
  animeName,
  animeKind,
  animeAired,
  animeEpisodes,
  animeScore,
}) => {
  return (
    <div className="max-w-am rounded relative w-full">
      <div className="relative lg:w-full h-[55vh] ">
        <Image
          src={`https://shikimori.one${animeImage}`}
          alt={animeName}
          fill
          className="rounded-xl"
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
              {animeEpisodes || animeAired}
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
      </div>
    </div>
  );
};

export default AnimeCard;
