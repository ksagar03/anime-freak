"use server";
import AnimeCard from "./components/AnimeCard";

export const fetchAnimeData = async ({page}) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await res.json();
//   console.log(data);
  return data.map((item, index) => (
    <AnimeCard
      key={item.id}
      index={index}
      animeImage={item.image.original}
      animeName={item.name}
      animeKind={item.kind}
      animeAired={item.episodes_aired}
      animeEpisodes={item.episodes}
      animeScore={item.score}
    />
  ))
};
