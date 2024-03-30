import React from "react";
import { fetchIndividualData } from "../fetchindividualinfo";
import { FramerImage } from "../components/ClientSide";
import Image from "next/image";
import episode_view from "../../public/episodes_view.svg";
import star from "../../public/stars_icons.svg";

const Info = async ({ params }) => {
  const data = await fetchIndividualData({ animeID: params.animeSelected });
  // console.log(data.data["attributes"].description);
  const dateformat = (data) => {
    const date = new Date(data);
    const options = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <>
      <div className=" grid grid-cols-12 py-10">
        <div className="flex justify-center col-span-4 lg:w-full h-[70vh] xl:h-[60vh] sm:h-[55vh] md:col-span-12 py-8 ">
          <FramerImage
            className=" rounded-lg border-2 bg-origin-border"
            // fill
            width={260}
            height={150}
            src={data.posterImage.original}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            priority
            sizes="(max-width: 200px) 100vw,
              (max-width: 100px) 50vw,
              50vw"
            objectFit="contain"
          />
        </div>

        <div className=" col-span-8 md:col-span-12 md:text-center">
          <h1 className="animename-gradient text-6xl font-semibold text-transparent animate-gradient md:text-4xl xs:text-2xl p-3">
            {data.titles.en}
          </h1>
          <div className=" text-balance font-bold p-2 flex justify-start m-2 gap-3 text-[#FFAD49] md:justify-center md:-mt-1 ">
            <p className=" px-2 border-2 rounded-lg">{data.ageRating}</p>
            <p className="border-2 rounded-lg px-2">{data.showType}</p>

            <div className="flex flex-row gap-1 items-center">
              <Image
                src={episode_view}
                alt="episodes"
                width={20}
                height={20}
                className=" object-contain"
              />
              <p className="text-base text-white font-bold">
                {data.episodeCount || "Airing"}
              </p>
            </div>
            <div className=" flex flex-row gap-1 items-center">
              <Image
                src={star}
                alt="star icon"
                width={20}
                height={20}
                className=" object-contain animate-spin-slow"
              />
              <p className="text-base font-bold text-[#FFAD49]">
                {Math.round(data.averageRating) / 10}
              </p>
            </div>
          </div>
          <h1 className="px-4">
            <span className=" text-pretty font-bold text-[#FFAD49]">
              Aring :
            </span>{" "}
            {dateformat(data.startDate)} - to -{" "}
            {data.endDate ? dateformat(data.endDate) : "?"}
            <br />
            ageRatingGuide: {data.ageRatingGuide}
            <br />
            youtubevideoID: {data.youtubeVideoId}
          </h1>

          <p>Discription:{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default Info;