import React from "react";
import { fetchIndividualData } from "../fetchindividualinfo";
const Info = async ({ params }) => {
  const data = await fetchIndividualData({ animeID: params.animeSelected });
  // console.log(data.data["attributes"].description);
  return (
    <div>
      <h1>To view anime view of specifc ID: {params.animeSelected}</h1>
      <h1>
      Name:{data.titles.en}
      </h1>
      <h1>
        Ratings:{(data.averageRating) / 10}
      </h1>
      <h1>
      startDate: {data.startDate}
      <br/>
      endDate: {data.endDate}
      <br/>
      ageRatingGuide: {data.ageRatingGuide}
      <br/>
      image: {data.posterImage.original}
      <br/>
      youtubevideoID: {data.youtubeVideoId}
      <br/>
      showType: {data.showType}
      </h1>
      
      <p>Discription:{data.description}</p>
    </div>
  );
};

export default Info;
