"use server";
import AnimeCard from "./components/AnimeCard";
import { animeSelected, setAnimeSelected } from "./components/ClientSide";
// import { useState } from "react";
// import { handleClick } from "./components/Framermotion";

export const fetchAnimeData = async ({ page }) => {
  // const [animeSelected, setAnimeSelected] = useState(null)
  // const res = await fetch(
  //   `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  // );
  // const data = await res.json();
  // console.log(data);
  const kitsuresponse = await fetch(
    `https://kitsu.io/api/edge/anime?page[limit]=8&page[offset]=${page}&sort=-favoritesCount`
  );
  const kitsudata = await kitsuresponse.json();
  // console.log(kitsudata);
  // let result = { id: {}, name: {} };
  // kitsudata.data.map((item, index) => {
  //   (result.id = [item.id]), (result.name = [item.link]);
  // });
  // console.log(result);
  // const handleClick = (id) => {
  //   setAnimeSelected(id)
  // };

  return kitsudata.data.map((item, index) => (
    <AnimeCard
      key={item.id}
      uniqueId={item.id}
      index={index}
      animeImage={item.attributes.posterImage.medium}
      animeName={item.attributes.titles.en}
      animeKind={item.attributes.subtype}
      animeAired={item.episodes_aired}
      animeEpisodes={item.attributes.episodeCount}
      animeScore={Math.round(item.attributes.averageRating) / 10}
    />
  ));
};
